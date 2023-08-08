import items from "../data/item.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = items.find((i) => i.id === id);
  
  return (
    <div>
       
       <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </div>
  );
};

export default CartItem;
