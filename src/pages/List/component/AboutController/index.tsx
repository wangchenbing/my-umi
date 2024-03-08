import React, { useEffect, useState } from 'react';
import services from '@/services/demo';
import { Space, Tag, Tabs, Table } from 'antd';
import type { TabsProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TemplateCom from '@/components/Globol/TemplatCom';
const { queryUserList1, queryUserList2 } = services.UserController;

export default (props: any) => {
  const [listData, setListData] = useState([]);

  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  let controller: any;

  const aboutFun = () => {
    controller?.abort();
    controller = new AbortController();
  };

  const queryUserList1Fun = async () => {
    const res: any = await queryUserList1({}, { signal: controller?.signal });
    setListData(res?.data?.list);
  };

  const queryUserList2Fun = async () => {
    const res: any = await queryUserList2({}, { signal: controller?.signal });
    setListData(res?.data?.list);
  };

  const onChange = (key: string) => {
    aboutFun();
    if (key === 'A_Com') {
      queryUserList1Fun();
    } else {
      queryUserList2Fun();
    }
  };

  useEffect(() => {
    queryUserList1Fun();
  }, []);

  const items: TabsProps['items'] = [
    {
      key: 'A_Com',
      label: `Tab 1`,
    },
    {
      key: 'b_Com',
      label: `Tab 2`,
    },
  ];

  return (
    <TemplateCom {...props}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Table columns={columns} dataSource={listData} />
    </TemplateCom>
  );
};
