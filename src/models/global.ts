// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [counter, setCounter] = useState<any>(DEFAULT_NAME);

  return {
    counter,
    setCounter
  };
};
export default useUser
