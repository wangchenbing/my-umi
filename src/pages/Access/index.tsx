import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Col, Row } from 'antd';

export default () => {
  const SortableItem = SortableElement(({ value }) => (
    <Col span={6}>{value}</Col>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <Row gutter={16}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </Row>
    );
  });
  const [arr, setarr] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(111);
    setarr((items) => arrayMoveImmutable(items, oldIndex, newIndex));
  };
  return <SortableList items={arr} onSortEnd={onSortEnd} axis="x" />;
};
