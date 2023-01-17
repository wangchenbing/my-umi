import React, { useState } from 'react'
import { Modal, Button, Tabs, Collapse } from 'antd';
import CodeMirror from "@uiw/react-codemirror"
// import { UnControlled as CodeMirror } from 'react-codemirror2'

import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from '@codemirror/lang-javascript';
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";

const { Panel } = Collapse;
export default (props: any) => {
  const { open, onCancel, title, url, width, btnList, footer = [] } = props
  const [proUrl, setProUrl] = useState<any>('')

  const afterCloseFn = () => {
    setProUrl('')
  }
  return (
    <Modal title={title} width={width || 1000} open={open} onCancel={onCancel} footer={footer} afterClose={afterCloseFn}>
      {props.children}
      <Collapse ghost={true} >
        <Panel header="Code" key="1" >
          {btnList ? <Tabs
            defaultActiveKey="0"
            centered
            onTabClick={(key, e) => {
              console.log(key)
              setProUrl(btnList[key].url)
            }}
            items={btnList.map((item: { name: string }, index: number) => {
              return {
                label: item.name,
                key: String(index),
                children: <CodeMirror
                  key={index}
                  value={proUrl?.default || btnList[0].url?.default}
                  height="400px"
                  extensions={[javascript({ jsx: true })]}
                  theme={okaidia}
                  //只读模式
                  readOnly={true}
                />,
              };
            }
            )}
          /> : <CodeMirror
            value={url?.default}
            height="400px"
            extensions={[javascript({ jsx: true })]}
            theme={okaidia}
            //只读模式
            readOnly={true}
          />}
        </Panel>

      </Collapse>




    </Modal>


  )
};


