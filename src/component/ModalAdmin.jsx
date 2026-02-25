import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct, deleteProduct } from '@/features/products/productSlice';

export const ModalAdmin = (props) => {
  const { modal, setModal } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleCancel = () => {
    setModal({
      open: false,
      mode: 'create',
      product: null,
    });
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      if (modal.mode === 'create') {
        const value = await form.validateFields();
        console.log('value: ', value);
        await dispatch(createProduct(value)).unwrap();
      }
      if (modal.mode === 'edit') {
        const value = await form.validateFields();
        await dispatch(
          updateProduct({
            id: modal.product.id,
            payload: value,
          })
        ).unwrap();
      }
      if (modal.mode === 'delete') {
        await dispatch(deleteProduct(modal.product.id)).unwrap();
      }
      setModal({
        open: false,
        mode: 'create',
        product: null,
      });
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setConfirmLoading(false);
    }
  };

  useEffect(() => {
    if (!modal.open) return;
    if (modal.mode === 'edit' && modal.product) {
      form.setFieldsValue(modal.product);
    }
    if (modal.mode === 'create') {
      form.resetFields();
    }
  }, [modal, form]);

  return (
    <Modal
      title={
        <h3 className="text-center mb-5 text-2xl">
          {modal.mode === 'create'
            ? 'Add Product'
            : modal.mode === 'edit'
              ? 'Edit Product'
              : 'Delete Product'}
        </h3>
      }
      open={modal.open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      className={'modalAdmin'}
    >
      {modal.mode === 'delete' ? (
        <>
          <div className="text-xl">
            Delete product by id :
            <span className="font-bold text-red-500"> {modal.product.id}</span> ?
          </div>
        </>
      ) : (
        <Form form={form}>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Name</span>}
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Price</span>}
            name="price"
            rules={[{ required: true, message: 'Price is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Description</span>}
            name="desc"
            rules={[{ required: true, message: 'Description is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Back Camera</span>}
            name="backCamera"
            rules={[{ required: true, message: 'BackCamera is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Front Camera</span>}
            name="frontCamera"
            rules={[{ required: true, message: 'FrontCamera is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Image</span>}
            name="img"
            rules={[{ required: true, message: 'Image is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Screen</span>}
            name="screen"
            rules={[{ required: true, message: 'Screen is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span className="inline-block mr-2.5 font-medium">Type</span>}
            name="type"
            rules={[{ required: true, message: 'Type is required' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};
