export const saveCartStorage = (cart)=> {
  localStorage.setItem('cart',JSON.stringify(cart))
}

export const getCartStorage = ()=> {
  const data = localStorage.getItem('cart')
  return data ? JSON.parse(data) : []
}