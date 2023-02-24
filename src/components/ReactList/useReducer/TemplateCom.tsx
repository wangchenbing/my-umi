import React from 'react';
import { CodeMirrorModul } from '@/components/Globol';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props?.props;
  const handleCancel = () => {
    console.log(111);
    setIsModalOpen(false);
  };
  const propsList = {
    title: title,
    btnList: require('!raw-loader!@/components/ReactList/useReducer'),
    open: isModalOpen,
    onCancel: handleCancel,
  };
  return <CodeMirrorModul {...propsList}>{props.children}</CodeMirrorModul>;
};
