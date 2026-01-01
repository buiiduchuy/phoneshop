import React from "react"
import { Modal } from "antd"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {openModal} from "@/features/products/productSlice"

export const ModalCart = () => {

  const [confirmLoading,setConfirmLoading] = useState(false)
  const dispatch = useDispatch()
  const open = useSelector((state)=>state.products.modal)

  const handleOk = ()=> {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(openModal)
      setConfirmLoading(false);
    }, 2000);
  }

  const handleCancel = ()=> {
    // setOpen(false)
  }

  return (
    <Modal
        title="Cart Manager"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>modalText</p>
    </Modal>
  )
}
