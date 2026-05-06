"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Variant } from "@/lib/products";

export type CartItem = {
  productSlug: string;
  productName: string;
  variantId: string;
  variantName: string;
  variantColor: string;
  price: number;
  currency: string;
  quantity: number;
  weight: string;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (slug: string, variantId: string) => void;
  updateQty: (slug: string, variantId: string, qty: number) => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productSlug === newItem.productSlug && i.variantId === newItem.variantId
      );
      if (existing) {
        return prev.map((i) =>
          i.productSlug === newItem.productSlug && i.variantId === newItem.variantId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, variantId: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productSlug === slug && i.variantId === variantId))
    );
  }, []);

  const updateQty = useCallback((slug: string, variantId: string, qty: number) => {
    if (qty < 1) {
      setItems((prev) =>
        prev.filter((i) => !(i.productSlug === slug && i.variantId === variantId))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productSlug === slug && i.variantId === variantId ? { ...i, quantity: qty } : i
      )
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQty, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
