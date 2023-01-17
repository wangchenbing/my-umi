import React, { useEffect } from 'react'
import { Modal } from 'antd';
import { useModel } from 'umi';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const { counter, setCounter } = useModel('global')

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <Modal title={title} open={isModalOpen} onCancel={handleCancel} footer={[]} >
      {counter}
    </Modal>
  )
};

