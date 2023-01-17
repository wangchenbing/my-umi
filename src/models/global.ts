// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState, useCallback } from 'react';

const useUser = () => {
  const [counter, setCounter] = useState<any>(DEFAULT_NAME);
  const increment = useCallback(() => setCounter((c: number) => c + 1), []);
  const decrement = useCallback(() => setCounter((c: number) => c - 1), []);
  console.log(counter, 'counter');

  return {
    counter,
    increment, decrement
  };
};

export default useUser;
