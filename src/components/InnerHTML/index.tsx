import React from 'react'
import { CodeMirrorModul } from '@/components/Globol'

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CodeMirrorModul title={title} url={require('!raw-loader!@/components/InnerHTML')} open={isModalOpen} onCancel={handleCancel} >
      <div dangerouslySetInnerHTML={{
        __html: ` <div>
                      <p>返回的字段</p>
                    </div>`
      }} />
    </CodeMirrorModul>
  )
};

