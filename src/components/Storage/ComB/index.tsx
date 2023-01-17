import React, { useState } from 'react'
import { Input, } from 'antd';
import localMsg from '../tagMsg'

const { Search } = Input;
const ComB = () => {
  const [refData, setRefData] = useState('')
  const onSearch = (value: string) => {
    localMsg.send('sendMsg_data', value)
    setRefData(value)
  };
  return (
    <div>
      <h2>组件B</h2>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="获取数据"
        size="large"
        onSearch={onSearch}
      />
      <h3>获取输入框的值:{refData}</h3>
    </div>
  )
};

export default ComB;
