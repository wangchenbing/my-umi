import React, { useReducer } from 'react';
import TemplateCom from './TemplateCom';
import { Button } from 'antd';
import reducer from './reducer';
import { information } from './initState';

export default (props: any) => {
  const [state, dispatch] = useReducer(reducer, information);
  return (
    <TemplateCom props={props}>
      <Button
        onClick={() => {
          dispatch({
            type: 'minus',
            value: '111',
          });
        }}
      >
        -
      </Button>
      {/* 显示当前外部的值 */}
      {state.count}
      <Button
        onClick={() => {
          dispatch({
            type: 'add',
            value: '222',
          });
        }}
      >
        +
      </Button>
    </TemplateCom>
  );
};
