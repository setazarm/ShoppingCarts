import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import items from "../data/item.json"
import { formatCurrency } from "../utilities/formatCurrency";
import { Offcanvas, Stack } from "react-bootstrap";
const ShoppingCart = () => {
  const { cartItem,isOpen,toggleCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={toggleCart}placement="end">
         <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
      {cartItem?.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="ms-auto fw-bold fs-5">
        total:
        {formatCurrency(cartItem.reduce((a,c)=>{
          let item= items.find(i =>i.id===c.id)
          return (item.price * c.quantity) + a
        },0))}
      </div>
      </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
