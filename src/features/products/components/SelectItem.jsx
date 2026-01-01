import React from 'react'
import {Select} from 'antd'

export const SelectItem = () => {
  return (
    <Select
    placeholder="Filter"
    options={[
      { value: '1', label: 'all' },
      { value: '2', label: 'Iphone' },
      { value: '3', label: 'SamSung' },
    ]}
    style={{width:'110px'}}
  />
  )
}
