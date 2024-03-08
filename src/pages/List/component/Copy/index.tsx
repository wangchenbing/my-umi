import React, { useRef } from 'react'
import { Input, Button } from 'antd';
import copy from 'copy-to-clipboard';
import styleLess from './index.less'
import TemplateCom from '@/components/Globol/TemplatCom';

export default (props: any) => {
  const useref = useRef<any>(null)

  const clickcopy = () => {
    copy(useref.current.input.value, {
      debug: false,
      message: 'Press #{key} to copy',
    });
  }

  return (
    <TemplateCom {...props}>
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
    </TemplateCom>
  )
}
