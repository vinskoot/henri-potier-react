import { createContext } from 'react';
import { Book } from './BooksContext';

export type CartItem = {
    isbn: string;
    quantity: number;
    data: Book;
};

type CartContext = {
    cart: CartItem[];
    setCart: Function;
};

export const cartContextDefault: CartContext = {
    cart: [],
    setCart: () => {},
};

export const CartContext = createContext<CartContext>(cartContextDefault);
