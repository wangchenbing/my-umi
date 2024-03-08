import React, { useState } from 'react';
import { Input } from 'antd';
import './index.less';
import TemplateCom from '@/components/Globol/TemplatCom';
import { typeList1, typeList2, listData, ParamsData } from './typeList';

export default (props: any) => {
  const [params, setParams] = useState<ParamsData>({
    areaType: 0,
    policyType: null,
  });

  const [keyword, setKeyWord] = useState('');

  //获取切换字段,通过标识符区分
  const handleClick = (value: string, type: string) => {
    console.log(value, type);
    setParams({
      areaType: Number(type === 'area' ? value : params.areaType),
      policyType: type === 'policyType' ? value : params.policyType,
    });
  };
  //获取输入框内容
  const handleChangeInput = (e: any) => {
    console.log(e.target.value);
    setKeyWord(e.target.value);
  };

  const handleChangeData = () => {
    const { areaType, policyType } = params;
    let _data = listData;
    if (keyword) {
      _data = _data.filter(
        (item) => item.policyName && item.policyName.includes(keyword),
      );
    }
    if (areaType) {
      _data = _data.filter((item) => item.areaType === areaType);
    }
    if (policyType) {
      _data = _data.filter((item) => item.policyType === policyType);
    }
    console.log(keyword, areaType, policyType, _data);
    return _data;
  };
  const filterData = handleChangeData();

  return (
    <TemplateCom {...props}>
      <Input
        placeholder="搜索"
        style={{ width: '90%', marginBottom: 10 }}
        onChange={(e) => handleChangeInput(e)}
      />
      <div>
        <ul style={{ display: 'flex', padding: '0px', marginBottom: 9 }}>
          {typeList1.map((item, i) => (
            <li
              key={i}
              className={`tags-item ${params.areaType === item.key && 'active'
                }`}
              onClick={() => handleClick(item.key, 'area')}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul style={{ display: 'flex', padding: '0px' }}>
          {typeList2.map((item, i) => (
            <li
              key={i}
              className={`tags-item ${params.policyType === item.key && 'active'
                }`}
              onClick={() => handleClick(item.key, 'policyType')}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {filterData.map((item, index) => (
          <li key={index}>{item.policyName}</li>
        ))}
      </ul>
    </TemplateCom>
  );
};
