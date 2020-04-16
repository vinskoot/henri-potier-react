import React, { FunctionComponent } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Book } from '../Book/Book';

type BooksListProps = {};

export const BooksList: FunctionComponent<BooksListProps> = () => {
    const { filteredBooks, loading } = useBooks();

    if (loading) {
        return <p>Chargement en cours...</p>;
    }

    return (
        <div>
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.isbn}>
                        <Book book={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
