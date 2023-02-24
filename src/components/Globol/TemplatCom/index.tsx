import React from 'react';
import { CodeMirrorModul } from '@/components/Globol';

export default (props: any) => {
  console.log(props);
  const { isModalOpen, setIsModalOpen, title, FileName } = props;
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const propsList = {
    title: title,
    btnList: require(`!raw-loader!@/${FileName}`),
    open: isModalOpen,
    onCancel: handleCancel,
  };
  return <CodeMirrorModul {...propsList}>{props.children}</CodeMirrorModul>;
};
