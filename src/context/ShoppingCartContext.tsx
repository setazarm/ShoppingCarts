import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartContext = {
  getItembyQuantity: (id: number) => number;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
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
  const getItembyQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseItem = (id: number) => {
    setCartItem((pre) => {
      let x = pre.find((item) => item.id === id);
      if (x) {
        return [...pre, { ...x, quantity: (x.quantity += 1) }];
      } else {
        return [...pre, { id: id, quantity: 1 }];
      }
    });
  };
  return (
    <ShoppingCartContext.Provider value={{ getItembyQuantity, increaseItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
