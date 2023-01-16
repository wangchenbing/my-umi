import React, { useState } from 'react'
import { Modal, Input } from 'antd';
import { CodeMirrorModul } from '@/components/Globol'
import './index.less'

const typeList1 = [
  {
    name: '全部',
    key: 0
  },
  {
    name: '市级',
    key: 1
  },
  {
    name: '区县',
    key: 2
  },
]
const typeList2 = [
  {
    name: '全部',
    key: null
  },
  {
    name: '类型1',
    key: '类型1'
  },
  {
    name: '类型2',
    key: '类型2'
  },
]
interface ParamsData {
  areaType: number;
  policyType: any;
}
export default (props: any) => {
  const { isModalOpen, setIsModalOpen, title } = props

  const [params, setParams] = useState<ParamsData>({
    areaType: 0,
    policyType: null
  })
  const listData = [
    { policyName: '市级类型1', key: 1, areaType: 1, policyType: '类型1' },
    { policyName: '市级类型2', key: 2, areaType: 1, policyType: '类型2' },
    { policyName: '区县类型1', key: 3, areaType: 2, policyType: '类型1' },
    { policyName: '区县类型2', key: 4, areaType: 2, policyType: '类型2' },
    { policyName: '省级类型1', key: 5, areaType: 3, policyType: '类型1' },
  ]
  const [keyword, setKeyWord] = useState('')


  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //获取切换字段,通过标识符区分
  const handleClick = (value: string, type: string) => {
    console.log(value, type)
    setParams({
      areaType: Number(type === 'area' ? value : params.areaType),
      policyType: type === 'policyType' ? value : params.policyType
    })
  }
  //获取输入框内容
  const handleChangeInput = (e: any) => {
    console.log(e.target.value);
    setKeyWord(e.target.value)
  }

  const handleChangeData = () => {
    const { areaType, policyType } = params
    let _data = listData;
    if (keyword) {
      _data = _data.filter(item => (item.policyName && item.policyName.includes(keyword)))
    }
    if (areaType) {
      _data = _data.filter(item => item.areaType === areaType)
    }
    if (policyType) {
      _data = _data.filter(item => item.policyType === policyType)
    }
    console.log(keyword, areaType, policyType, _data)
    return _data
  }
  const filterData = handleChangeData()

  return (
    <CodeMirrorModul title={title} open={isModalOpen} onCancel={handleCancel} url={require('!raw-loader!@/components/ScreenModule')}>
      <Input placeholder="搜索" style={{ width: '90%', marginBottom: 10 }} onChange={(e) => handleChangeInput(e)} />
      <div>
        <ul style={{ display: 'flex', padding: '0px', marginBottom: 9 }}>
          {
            typeList1.map((item, i) => <li key={i} className={`tags-item ${params.areaType === item.key && "active"}`} onClick={() => handleClick(item.key, 'area')}>{item.name}</li>)
          }
        </ul>
        <ul style={{ display: 'flex', padding: '0px' }}>
          {
            typeList2.map((item, i) => <li key={i} className={`tags-item ${params.policyType === item.key && "active"}`} onClick={() => handleClick(item.key, 'policyType')}>{item.name}</li>)
          }
        </ul>
      </div>
      <ul>
        {filterData.map((item, index) => <li key={index}>{item.policyName}</li>)}
      </ul>
    </CodeMirrorModul>
  )
}
