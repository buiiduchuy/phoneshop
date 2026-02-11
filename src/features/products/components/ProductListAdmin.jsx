import { Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export const ProductListAdmin = () => {
  const list = useSelector((state) => state.products.list);
  console.log('list: ', list);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (img) => (
        <img
          src={img}
          alt="name"
          style={{
            width: 100,
            objectFit: 'cover',
            borderRadius: 5,
          }}
        />
      ),
    },
    {
      title: 'Desciption',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => {
        return (
          <div className="flex gap-2">
            <button className="rounded-md bg-amber-500 text-white px-4 py-1.5">Edit</button>
            <button className="rounded-md bg-red-500 text-white px-4 py-1.5">Deleta</button>
          </div>
        );
      },
    },
  ];

  const dataSource = list;
  return <Table columns={columns} dataSource={dataSource} rowKey="id" />;
};
