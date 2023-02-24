import React, { useState, useMemo } from 'react';
import { Button } from 'antd';

export default ({ ObjComList }: any) => {
  const ComArrList = ObjComList.map((item: any) => {
    const {
      title,
      FileName,
      component,
      data = useState<boolean>(false),
    } = item;
    return {
      title,
      FileName,
      component,
      isModalOpen: data[0],
      setIsModalOpen: data[1],
    };
  });

  const btnClick = (index: number) => {
    ComArrList.forEach((_: any, i: number) => {
      if (i === index) ComArrList[i].setIsModalOpen(true);
    });
  };

  return (
    <div>
      {ComArrList.map((item: any, index: number) => (
        <Button key={index} onClick={() => btnClick(index)}>
          {item.title}
        </Button>
      ))}
      {ComArrList.map((item: any, index: number) =>
        useMemo(
          () => <item.component key={index} {...item} />,
          [item.isModalOpen],
        ),
      )}
    </div>
  );
};