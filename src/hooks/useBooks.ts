import { useContext, useEffect, useCallback } from 'react';
import { Book, BooksContext } from '../contexts/BooksContext';
import Axios from 'axios';

type UseBooks = {
    loading: boolean;
    loaded: boolean;
    books: Book[];
    filteredBooks: Book[];
    search: (query: string) => void;
};

export const useBooks = (): UseBooks => {
    const { loading, setLoading, loaded, setLoaded, books, setBooks, filteredBooks, setFilteredBooks } = useContext(
        BooksContext,
    );

    const getBooks = useCallback(async (): Promise<void> => {
        if (!loaded) {
            setLoading(true);
            await Axios.get<Book[]>('http://henri-potier.xebia.fr/books')
                .then(({ data }) => {
                    setBooks(data);
                    setFilteredBooks(data);
                    setLoaded(true);
                })
                .catch((error) => {
                    console.error(error);
                })
                .then(() => {
                    setLoading(false);
                });
        }
    }, [loaded, setBooks, setFilteredBooks, setLoaded, setLoading]);

    const search = useCallback(
        (query: string): void => {
            const lowerQuery = query.toLowerCase();
            setFilteredBooks(
                books.filter((book) => {
                    return (
                        book.title.search(lowerQuery) !== -1 ||
                        (book.synopsis.length > 0 && book.synopsis[0].toLowerCase().search(lowerQuery) !== -1)
                    );
                }),
            );
        },
        [books, setFilteredBooks],
    );

    useEffect(() => {
        getBooks();
    }, [getBooks]);

    return { loading, loaded, books, search, filteredBooks };
};
