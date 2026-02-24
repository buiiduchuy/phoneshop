import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';

export const ModalAdmin = (props) => {
  const { modal, setModal } = props;
  console.log('modal: ', modal);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  console.log('form: ', form);

  const handleCancel = () => {
    setModal({
      open: false,
      mode: 'create',
      product: null,
    });
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModal({
        open: false,
        mode: 'create',
        product: null,
      });
      setConfirmLoading(false);
    }, 500);
  };

  useEffect(() => {
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
        modal.mode == 'create' ? (
          <h3 className="text-center mb-5 text-2xl">Add product</h3>
        ) : (
          <h3 className="text-center mb-5 text-2xl">Edit product</h3>
        )
      }
      open={modal.open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      className={'modalAdmin'}
    >
      <Form form={form}>
        <FormItem label={<span className="inline-block mr-2.5 font-medium">Name</span>} name="name">
          <Input />
        </FormItem>
        <FormItem
          label={<span className="inline-block mr-2.5 font-medium">Price</span>}
          name="price"
        >
          <Input />
        </FormItem>
        <FormItem
          label={<span className="inline-block mr-2.5 font-medium">Description</span>}
          name="desc"
        >
          <Input />
        </FormItem>
        <FormItem
          label={<span className="inline-block mr-2.5 font-medium">Back Camera</span>}
          name="backCamera"
        >
          <Input />
        </FormItem>
        <FormItem
          label={<span className="inline-block mr-2.5 font-medium">Front Camera</span>}
          name="frontCamera"
        >
          <Input />
        </FormItem>
        <FormItem label={<span className="inline-block mr-2.5 font-medium">Image</span>} name="img">
          <Input />
        </FormItem>
        <FormItem
          label={<span className="inline-block mr-2.5 font-medium">Screen</span>}
          name="screen"
        >
          <Input />
        </FormItem>
        <FormItem label={<span className="inline-block mr-2.5 font-medium">Type</span>} name="type">
          <Input />
        </FormItem>
      </Form>
    </Modal>
  );
};
