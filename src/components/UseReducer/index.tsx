import React, { useEffect } from 'react'
import { Modal } from 'antd';
import useUser from '@/models/global'


export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props
  const { counter, increment, decrement } = useUser()
  console.log("file: index.tsx:9 ~ useUser()", useUser(), props)

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <Modal title={title} open={isModalOpen} onCancel={handleCancel} footer={[]} >
      {counter}
    </Modal>
  )
};

