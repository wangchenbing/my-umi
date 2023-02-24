import React from 'react';
import { DomCom } from '@/components/Globol';
import { useModel } from '@umijs/max';

export default () => {
  const { ObjComList } = useModel('reactHooksList');
  return <DomCom ObjComList={ObjComList} />;
};
