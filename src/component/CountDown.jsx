import React, { useEffect, useState } from 'react';

export const CountDown = (props) => {
  const { hour } = props;
  const totalSeconds = hour * 60 * 60;
  const [second, setSecond] = useState(totalSeconds);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [second]);
  const h = Math.floor(second / 3600);
  const m = Math.floor((second % 3600) / 60);
  const s = second % 60;
  return (
    <div>
      <span className="bg-gray-500 w-6.5 h-6.5 inline-flex items-center justify-center rounded-xs">
        {String(h).padStart(2, '0')}
      </span>
      :
      <span className="bg-gray-500 w-6.5 h-6.5 inline-flex items-center justify-center rounded-xs">
        {String(m).padStart(2, '0')}
      </span>
      :
      <span className="bg-gray-500 w-6.5 h-6.5 inline-flex items-center justify-center rounded-xs">
        {String(s).padStart(2, '0')}
      </span>
    </div>
  );
};
