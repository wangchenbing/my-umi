import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
// import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
// import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';
import { langs } from '@uiw/codemirror-extensions-langs';
// import * as events from '@uiw/codemirror-extensions-events';
import { color } from '@uiw/codemirror-extensions-color';

import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import localMsg from '../Storage/tagMsg';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props;
  const [valueData, setvalueData] = useState('');
  // const [center, setCenter] = useState('')

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    localMsg.listen((type, payload) => {
      console.log(type);
      console.log(payload);
    });
  }, []);

  const propsList = {
    title: title,
    open: isModalOpen,
    onCancel: handleCancel,
    footer: [],
  };

  return (
    <Modal {...propsList}>
      <CodeMirror
        value={valueData}
        height="500px"
        extensions={[
          javascript({ jsx: true }),
          // lineNumbersRelative
          [langs.tsx()],
          [color],
        ]}
        basicSetup={{
          //折叠
          foldGutter: false,
          // dropCursor: false,
          // allowMultipleSelections: false,
          // indentOnInput: true,
          // lineNumbers: false,
        }}
        //不可编辑
        // editable={false}
        theme={vscodeDark}
        onChange={(value) => {
          setvalueData(value);
        }}
      />
    </Modal>
  );
};
