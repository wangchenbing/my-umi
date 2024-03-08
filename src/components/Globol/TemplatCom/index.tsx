import React from 'react';
import { CodeMirrorModul } from '@/components/Globol';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title, FileName, warningList, btnList } = props;
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const propsList = {
    title: title,
    btnList: Array.isArray(btnList) ? btnList : require(`!raw-loader!@/${FileName}`),
    open: isModalOpen,
    onCancel: handleCancel,
    warningList,
  };
  return <CodeMirrorModul {...propsList}>{props.children}</CodeMirrorModul>;
};
