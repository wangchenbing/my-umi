import React, { useState } from 'react';
import { Modal, Tabs, Collapse, Space, Badge, Tooltip, List } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from '@codemirror/lang-javascript';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';

const { Panel } = Collapse;
interface PropsInter {
  open: boolean;
  onCancel: () => void;
  title: string;
  width?: number | string;
  btnList: any | any[];
  footer?: any;
  warningList?: string[];
  children: any;
}

export default (props: PropsInter) => {
  const {
    open,
    onCancel,
    title,
    width,
    btnList,
    footer = null,
    warningList = [],
  } = props;
  const [proUrl, setProUrl] = useState<any>('');

  const CodeMirrorCom = () => (
    <CodeMirror
      value={
        proUrl?.default ||
        (Array.isArray(btnList) ? btnList[0].url?.default : btnList.default)
      }
      height="400px"
      extensions={[javascript({ jsx: true })]}
      theme={okaidia}
      //只读模式
      // readOnly={true}
      editable={false}
    />
  );

  return (
    <Modal
      title={
        warningList.length === 0 ? (
          title
        ) : (
          <Tooltip
            placement="topLeft"
            title={
              <List
                size="small"
                bordered
                dataSource={warningList}
                renderItem={(item: string) => (
                  <List.Item style={{ color: '#fff' }}>{item}</List.Item>
                )}
              />
            }
          >
            <Space>
              <Badge dot offset={[10, 0]}>
                {title}
              </Badge>
            </Space>
          </Tooltip>
        )
      }
      width={width || 1000}
      open={open}
      onCancel={onCancel}
      footer={footer}
      afterClose={() => {
        setProUrl('');
      }}
    >
      {props.children}
      <Collapse ghost={true}>
        <Panel header="Code" key="1">
          {btnList && Array.isArray(btnList) ? (
            <Tabs
              defaultActiveKey="0"
              centered
              onTabClick={(key) => setProUrl(btnList[Number(key)].url)}
              items={btnList.map((item: { name: string }, index: number) => ({
                label: item.name,
                key: String(index),
                children: <CodeMirrorCom />,
              }))}
            />
          ) : (
            <CodeMirrorCom />
          )}
        </Panel>
      </Collapse>
    </Modal>
  );
};
