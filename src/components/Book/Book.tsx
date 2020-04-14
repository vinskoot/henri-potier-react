import React, { FunctionComponent } from 'react';
import style from './Book.scss';
import { Book as BookType } from '../../contexts/BooksContext';
import { useCart } from '../../hooks/useCart';

type BookProps = {
    book: BookType;
};

export const Book: FunctionComponent<BookProps> = ({ book }) => {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className={`${style.component}`}>
            {book.title}
            <button onClick={(): void => removeFromCart(book.isbn, 1)}>-</button>
            <button onClick={(): void => addToCart(book.isbn, 1)}>+</button>
        </div>
    );
};
