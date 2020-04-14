import { useContext, useCallback } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import { CartContext, CartItem } from '../contexts/CartContext';

type UseCart = {
    cart: CartItem[];
    addToCart: (isbn: string, quantity: number) => void;
    removeFromCart: (isbn: string, quantity: number) => void;
};

export const useCart = (): UseCart => {
    const { cart, setCart } = useContext(CartContext);
    const { books } = useContext(BooksContext);

    const addToCart = useCallback(
        (isbn: string, quantity: number): void => {
            const bookData = books.find((item) => item.isbn === isbn);
            if (!bookData) {
                console.error(`Book with ISBN ${isbn} not found in the library`);
                return;
            }

            const cartForAdd = [...cart];
            const alreadyCarted = cartForAdd.find((item) => item.isbn === isbn);
            if (alreadyCarted) {
                alreadyCarted.quantity += quantity;
            } else {
                cartForAdd.push({
                    isbn: isbn,
                    quantity: quantity,
                    data: bookData,
                });
            }
            setCart(cartForAdd);
        },
        [books, cart, setCart],
    );

    const removeFromCart = useCallback(
        (isbn: string, quantity: number): void => {
            const cartForRemove = [...cart];
            const cartedItem = cartForRemove.find((item) => item.isbn === isbn);
            if (cartedItem) {
                cartedItem.quantity -= quantity;
            }
            setCart(cartForRemove.filter((item) => item.quantity > 0));
        },
        [cart, setCart],
    );

    return { cart, addToCart, removeFromCart };
};
