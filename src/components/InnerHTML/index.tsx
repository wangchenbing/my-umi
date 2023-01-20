import React from 'react';
import { CodeMirrorModul } from '@/components/Globol';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props;
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const propsList = {
    title: title,
    btnList: require('!raw-loader!@/components/InnerHTML'),
    open: isModalOpen,
    onCancel: handleCancel,
  };
  return (
    <CodeMirrorModul {...propsList}>
      <div
        dangerouslySetInnerHTML={{
          __html: ` <div>
                      <p>返回的字段</p>
                    </div>`,
        }}
      />
    </CodeMirrorModul>
  );
};
