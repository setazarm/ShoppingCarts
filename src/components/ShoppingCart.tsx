import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItem"

const ShoppingCart = () => {
    const{cartItem}=useShoppingCart()

  return (
    <div>Shopping Cart
        {cartItem?.map(item=>{
         return <CartItem key={item.id} {...item}/>
        }
        )}
    </div>
  )
}

export default ShoppingCart