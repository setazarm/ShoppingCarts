import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartContext = {
  getItembyQuantity: (id: number) => number;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number;
  toggleCart:()=>void;
  cartItem: CartItem[]
};
type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const getItembyQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItem = (id: number) => {
    setCartItem((pre) => {
      if (!pre.find((item) => item.id === id)) {
        return [...pre, { id: id, quantity: 1 }];
      } else {
        return pre.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    });
  };

  const decreaseItem = (id: number) => {
    setCartItem((pre) => {
      return pre.find((item) => item.id === id)
        ? pre.map((item) => {
            if (item.id === id && item.quantity >= 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          })
        : pre;
    });
  };

  const removeItem = (id:number)=>{
    setCartItem((pre)=>{
      return pre.filter(item=>item.id !==id)
    })

  }
const toggleCart=()=>{
  setIsOpen(!isOpen)

}
const cartQuantity= cartItem.reduce((a,c)=> a+c.quantity,0)
  return (
    <ShoppingCartContext.Provider
      value={{ getItembyQuantity, increaseItem, decreaseItem, removeItem, toggleCart, cartQuantity,isOpen,cartItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
