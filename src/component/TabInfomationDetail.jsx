import React from 'react';
import { Tabs } from 'antd';

export const TabInfomationDetail = (props) => {
  const { prod } = props;
  console.log('prod: ', prod);
  const items = [
    {
      key: '1',
      label: <span>Description</span>,
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: <span>Infomation</span>,
      children: 'Content of Tab Pane 2',
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};
