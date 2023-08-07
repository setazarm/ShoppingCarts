import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext"

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {getItembyQuantity, increaseItem, decreaseItem,removeItem}=useShoppingCart()
  const quantity = getItembyQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <div className="m-auto w-100">
        {quantity === 0 ? (
          <Button className="w-100" onClick={()=>increaseItem(id)}>+ Add to Cart</Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center flex-row"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={()=>decreaseItem(id)}>-</Button>
              <div>{quantity}</div>
              <Button onClick={()=>increaseItem(id)}>+</Button>
            </div>
            <Button onClick={()=>removeItem(id)} variant="danger" size="sm">
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoreItem;
