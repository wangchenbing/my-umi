import React from 'react'
import { CodeMirrorModul } from '@/components/Globol'
import { useModel } from 'umi';

export default (props: any) => {
  const { counter, setCounter } = useModel('global')
  const { isModalOpen, setIsModalOpen, title } = props
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const propsList = {
    title: title,
    btnList: require('!raw-loader!@/components/InnerHTML'),
    open: isModalOpen,
    onCancel: handleCancel
  }
  return (
    <CodeMirrorModul {...propsList} >
      <button onClick={() => {
        setCounter((item: number) => item + 1)
      }}>{counter}</button>
      <div dangerouslySetInnerHTML={{
        __html: ` <div>
                      <p>返回的字段</p>
                    </div>`
      }} />
    </CodeMirrorModul>
  )
};

