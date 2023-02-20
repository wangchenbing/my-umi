// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [ObjComList, setObjComList] = useState<any>(DEFAULT_NAME);

  return {
    ObjComList,
    setObjComList,
  };
};
export default useUser;
