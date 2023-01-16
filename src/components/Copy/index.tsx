import React, { useRef } from 'react'
import { Input, Button } from 'antd';
import copy from 'copy-to-clipboard';
import styleLess from './index.less'
import { CodeMirrorModul } from '@/components/Globol'


export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const useref = useRef<any>(null)

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const clickcopy = () => {
    copy(useref.current.input.value, {
      debug: false,
      message: 'Press #{key} to copy',
    });
  }
  return (
    <CodeMirrorModul title={title} open={isModalOpen} onCancel={handleCancel} url={require('!raw-loader!@/components/Copy')}>
      <Input.Group compact className={styleLess['inpGroup']} >
        <div className={styleLess['inpDiv']}>
          <Input
            ref={useref}
            defaultValue="aaaaa"
          />
          <Button type="primary" onClick={clickcopy} className={styleLess['inpBtn']} >复制</Button>
        </div>
      </Input.Group>
      <Input.Group compact>
        <Input />
      </Input.Group>
    </CodeMirrorModul>
  )
}
