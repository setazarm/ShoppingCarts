import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import items from "../data/item.json"
import { formatCurrency } from "../utilities/formatCurrency";

const ShoppingCart = () => {
  const { cartItem } = useShoppingCart();

  return (
    <div>
      Shopping Cart
      {cartItem?.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div>total:
        {formatCurrency(cartItem.reduce((a,c)=>{
          let item= items.find(i =>i.id===c.id)
          return (item.price * c.quantity) + a
        },0))}
      </div>
    </div>
  );
};

export default ShoppingCart;
