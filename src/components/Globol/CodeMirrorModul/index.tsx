import React from 'react'
import { Modal } from 'antd';
import CodeMirror from "@uiw/react-codemirror"
// import { UnControlled as CodeMirror } from 'react-codemirror2'

import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from '@codemirror/lang-javascript';
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";

export default (props: any) => {
  const { open, onCancel, title, url, width } = props
  console.log(url)

  return (
    <Modal title={title} width={width || 1000} open={open} onCancel={onCancel} footer={[]}>
      {props.children}
      <CodeMirror
        value={url.default.toString()}
        height="500px"
        extensions={[javascript({ jsx: true })]}
        theme={okaidia}
        //只读模式
        readOnly={true}
      />
    </Modal>


  )
};


