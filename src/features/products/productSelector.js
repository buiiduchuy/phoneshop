import {createSelector} from '@reduxjs/toolkit'

export const selectFilteredProducts = createSelector(
  state => state.products.list,
  state => state.products.filter,
  (list,filter)=> {
    if(filter==='all') return list
    return list.filter((item)=>(item.type).toLowerCase()===filter)
  }
)