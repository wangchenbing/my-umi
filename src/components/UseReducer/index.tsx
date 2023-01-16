import React from 'react'
import { Modal } from 'antd';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title={title} open={isModalOpen} onCancel={handleCancel} footer={[]} >

    </Modal>
  )
};

