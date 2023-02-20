import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { useModel } from '@umijs/max';

export default () => {
  const { ObjComList, setObjComList } = useModel('global');

  const ComArrList = ObjComList.map((item: object) => {
    const { name, component, data = useState<boolean>(false) } = item as any;
    return { name, component, isModalOpen: data[0], setIsModalOpen: data[1] };
  });

  const btnClick = (index: number) => {
    ComArrList.forEach((_: any, i: any) => {
      if (i === index) {
        ComArrList[i].setIsModalOpen(true);
      }
    });
  };
  const SortableItem = SortableElement(({ value, sortIndex }: any) => (
    <li style={{ listStyle: 'none' }}>
      <Button onClick={() => btnClick(sortIndex)}>{value.name}</Button>
    </li>
  ));

  const SortableList = SortableContainer(({ items }: any) => {
    return (
      <ul style={{ display: 'flex' }}>
        {items.map((value: any, index: any) => (
          <SortableItem
            key={index}
            index={index}
            value={value}
            sortIndex={index}
          />
        ))}
      </ul>
    );
  });
  const onSortEnd = ({ oldIndex, newIndex }: any) =>
    setObjComList((items: any) =>
      arrayMoveImmutable(items, oldIndex, newIndex),
    );

  return (
    <div>
      <SortableList items={ObjComList} onSortEnd={onSortEnd} axis="xy" />
      {/* {ComArrList.map((item, index) => <Button key={index} onClick={() => btnClick(index)}>{item.name}</Button>)} */}
      {ComArrList.map((item: any, index: any) =>
        useMemo(
          () => (
            <item.component
              key={index}
              isModalOpen={item.isModalOpen}
              setIsModalOpen={item.setIsModalOpen}
              title={item.name}
            />
          ),
          [item.isModalOpen],
        ),
      )}
    </div>
  );
};
