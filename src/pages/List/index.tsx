import React, { useState, useMemo } from 'react'
import { Button } from 'antd';
import ObjComList from './enumer'

export default () => {
  const ComArrList = ObjComList.map(item => {
    const { name, component, data = useState<boolean>(false) } = item as any
    return { name, component, isModalOpen: data[0], setIsModalOpen: data[1] }
  })

  const btnClick = (index: number) => {
    ComArrList.forEach((_, i) => {
      if (i === index) { ComArrList[i].setIsModalOpen(true) }
    })
  }

  return (
    <div>
      {ComArrList.map((item, index) => <Button key={index} onClick={() => btnClick(index)}>{item.name}</Button>)}
      {ComArrList.map((item, index) => useMemo(() => <item.component key={index} isModalOpen={item.isModalOpen} setIsModalOpen={item.setIsModalOpen} title={item.name} />, [item.isModalOpen]))}
    </div>
  )
}