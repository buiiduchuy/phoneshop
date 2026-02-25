import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';

export const SearchProductAdmin = (props) => {
  const { setModal } = props;
  const [result, setResult] = useState([]);
  const { list } = useSelector((state) => state.products);

  const searchProduct = useCallback(
    (value) => {
      if (!value) {
        return setResult([]);
      }
      const keyword = value;
      const filtered = list.filter((p) => p.name.toLowerCase().includes(keyword));
      setResult(filtered);
    },
    [list]
  );

  const debounceHandleSearch = useMemo(() => {
    return debounce(searchProduct, 500);
  }, [searchProduct]);

  useEffect(() => {
    return () => {
      debounceHandleSearch.cancel();
    };
  }, [debounceHandleSearch]);

  const handleSearch = (e) => {
    debounceHandleSearch(e.target.value);
  };

  const openModal = (prod) => {
    setModal({
      open: true,
      mode: 'edit',
      product: prod,
    });
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
      {result.length > 0 && (
        <div className="absolute w-full p-2.5 top-full left-0 border border-gray-100 shadow z-10 bg-white">
          {result.map((item) => (
            <div
              key={item.id}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
