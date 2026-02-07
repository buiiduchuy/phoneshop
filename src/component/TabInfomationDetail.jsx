import React from 'react';
import { Tabs } from 'antd';

export const TabInfomationDetail = (props) => {
  const { prod } = props;
  console.log('prod: ', prod);
  const items = [
    {
      key: '1',
      label: <span className="font-medium text-xl text-gray-800">Description</span>,
      children: <p>{prod.desc}</p>,
    },
    {
      key: '2',
      label: <span className="font-medium text-xl text-gray-800">Infomation</span>,
      children: (
        <div>
          <table className="table">
            <tr className="mb-2.5 block">
              <td>
                <span className="inline-block min-w-40 bg-gray-100 p-2.5">Name</span>
              </td>
              <td>
                <span className="inline-block p-2.5">{prod.name}</span>
              </td>
            </tr>
            <tr className="mb-2.5 block">
              <td>
                <span className="inline-block min-w-40 bg-gray-100 p-2.5">Front Camera</span>
              </td>
              <td>
                <span className="inline-block p-2.5">{prod.frontCamera}</span>
              </td>
            </tr>
            <tr className="mb-2.5 block">
              <td>
                <span className="inline-block min-w-40 bg-gray-100 p-2.5">Back Camera</span>
              </td>
              <td>
                <span className="inline-block p-2.5">{prod.backCamera}</span>
              </td>
            </tr>
            <tr className="mb-2.5 block">
              <td>
                <span className="inline-block min-w-40 bg-gray-100 p-2.5">Screen</span>
              </td>
              <td>
                <span className="inline-block p-2.5">{prod.screen}</span>
              </td>
            </tr>
            <tr className="mb-2.5 block">
              <td>
                <span className="inline-block min-w-40 bg-gray-100 p-2.5">Type</span>
              </td>
              <td>
                <span className="inline-block p-2.5">{prod.type}</span>
              </td>
            </tr>
          </table>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};
