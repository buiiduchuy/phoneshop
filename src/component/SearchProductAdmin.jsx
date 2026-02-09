import React, { useEffect, useMemo, useState } from 'react';
import { Input } from 'antd';
import debounce from 'lodash.debounce';

export const SearchProductAdmin = () => {
  const [result, setResult] = useState('');

  const searchProduct = (value) => {
    console.log('value: ', value);
    setResult(value);
  };

  const debounceHandleSearch = useMemo(() => {
    return debounce(searchProduct, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debounceHandleSearch.cancel();
    };
  }, [debounceHandleSearch]);

  const handleSearch = (e) => {
    debounceHandleSearch(e.target.value);
  };

  return (
    <div className="bg-white relative">
      <Input
        placeholder="product name"
        className=""
        size="large"
        allowClear
        onChange={handleSearch}
      />
      {result && (
        <div className="absolute w-full p-2.5 top-full left-0 border border-gray-100 shadow">
          {result}
        </div>
      )}
    </div>
  );
};
