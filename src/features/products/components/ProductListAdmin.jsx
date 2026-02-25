import { Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export const ProductListAdmin = (props) => {
  const { setModal } = props;
  const list = useSelector((state) => state.products.list);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
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
      sorter: (a, b) => a.price - b.price,
      render: (price) => <span>${price}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            <button
              className="rounded-md bg-amber-500 text-white px-4 py-1.5 cursor-pointer hover:opacity-80"
              onClick={() =>
                setModal({
                  open: true,
                  mode: 'edit',
                  product: record,
                })
              }
            >
              Edit
            </button>
            <button
              className="rounded-md bg-red-500 text-white px-4 py-1.5 cursor-pointer hover:opacity-80"
              onClick={() =>
                setModal({
                  open: true,
                  mode: 'delete',
                  product: record,
                })
              }
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const dataSource = list;
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
      pagination={{
        defaultPageSize: 10,
        pageSizeOptions: ['5', '10', '20', '50'],
        showSizeChanger: true,
      }}
    />
  );
};
