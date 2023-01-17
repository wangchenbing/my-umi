import React from 'react'
import { CodeMirrorModul } from '@/components/Globol'
import useUser from '@/models/global'

export default (props: any) => {
  const { counter, increment, decrement } = useUser()
  const { isModalOpen, setIsModalOpen, title } = props
  console.log(counter, 'inhtml');
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CodeMirrorModul title={title} url={require('!raw-loader!@/components/InnerHTML')} open={isModalOpen} onCancel={handleCancel} >
      <button onClick={() => {
        increment()
      }}>{counter}</button>
      {/* <div dangerouslySetInnerHTML={{
        __html: ` <div>
                      <p>返回的字段</p>
                    </div>`
      }} /> */}
    </CodeMirrorModul>
  )
};

