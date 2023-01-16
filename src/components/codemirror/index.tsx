import React, { useState, useCallback, useEffect } from 'react'
import { Modal, Button, Input } from 'antd';

import CodeMirror from "@uiw/react-codemirror"
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from '@codemirror/lang-javascript';
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
// const H1Com = require('!raw-loader!./11').default
// console.log(H1Com)


export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const [valueData, setvalueData] = useState('')

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {

    setvalueData('console.log(11)')


  }, [])

  return (
    <Modal title={title} open={isModalOpen} onCancel={handleCancel} footer={[]} >
      <CodeMirror
        value={valueData}
        height="500px"
        extensions={[javascript({ jsx: true })]}
        theme={okaidia}
        onChange={(value, valueFun) => {
          console.log(valueFun)
          setvalueData(value)
        }}
      />
    </Modal>
  )
};


