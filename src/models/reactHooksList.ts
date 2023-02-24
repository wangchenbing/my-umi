import { REACTHOOKSLIST } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [ObjComList, setObjComList] = useState<any>(REACTHOOKSLIST);

  return {
    ObjComList,
    setObjComList,
  };
};
export default useUser;
