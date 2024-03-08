import React from 'react'
import { CodeMirrorModul } from '@/components/Globol'
import { Button } from 'antd'
import styleList from './index.less'
import { btnList } from './enumer'
import ComA from './ComA';
import ComB from './ComB';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const footerList = [
    <Button onClick={() => {
      const w: any = window.open('about:list');
      w.location.href = '/list'
    }}>
      打开新窗口
    </Button>,
    <Button onClick={() => {
      localStorage.clear()
    }}>清空本地数据</Button>
  ]
  const propsList = {
    title: title,
    btnList: btnList,
    footer: footerList,
    open: isModalOpen,
    onCancel: handleCancel
  }

  return (
    <CodeMirrorModul {...propsList} >
      <div className={styleList['com-list']}>
        <ComA></ComA>
        <ComB></ComB>
      </div>
    </CodeMirrorModul>
  )
};

