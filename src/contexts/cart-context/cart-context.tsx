"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Game } from "@/types";

interface CartContextType {
  items: Game[];
  addItem: (item: Game) => void;
  removeItem: (itemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Game[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    }
  }, [isHydrated]);

  const addItem = (item: Game) => {
    setItems((prevItems) => {
      if (!prevItems.some((i) => i.id === item.id)) {
        const newItems = [...prevItems, item];
        localStorage.setItem("cart", JSON.stringify(newItems));
        return newItems;
      }
      return prevItems;
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
