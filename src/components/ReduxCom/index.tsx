import React, { useRef } from 'react';
import { Button } from 'antd';
import { btnList } from './enumer';
import store from './redux/store';
import { CodeMirrorModul } from '@/components/Globol';
import {
  createIncrementAction,
  createDecrementAction,
} from './redux/count_action';

export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const ref = useRef<any>();
  //store.dispatch()向store传入对象(动作与值)
  //加
  const increment = () => {
    const { value } = ref.current;
    //文件外定义
    // export const createIncrementAction = (type, data) => ({ type, data })
    store.dispatch(createIncrementAction('increment', Number(value)));
    //!同理与
    // store.dispatch({ type: 'increment', data: Number(value) })
  };
  //减
  const decrement = () => {
    const { value } = ref.current;
    store.dispatch(createDecrementAction('decrement', Number(value)));
  };
  //奇数加
  const incrementIFOdd = () => {
    const { value } = ref.current;
    if (store.getState() % 2 === 0) {
      store.dispatch(createIncrementAction('increment', Number(value)));
    }
  };
  //异步加
  const incrementAsync = () => {
    const { value } = ref.current;
    setTimeout(() => {
      store.dispatch(createIncrementAction('increment', Number(value)));
    }, 100);
  };
  const propsList = {
    title: title,
    btnList: btnList,
    open: isModalOpen,
    onCancel: handleCancel,
  };
  return (
    <CodeMirrorModul {...propsList}>
      <h2>当前值:{store.getState()}</h2>
      <select ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <Button onClick={increment}>+</Button>&nbsp;
      <Button onClick={decrement}>-</Button>&nbsp;
      <Button onClick={incrementIFOdd}>奇数加</Button>&nbsp;
      <Button onClick={incrementAsync}>异步加</Button>
    </CodeMirrorModul>
  );
};
