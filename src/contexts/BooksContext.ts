import { createContext } from 'react';

export type Book = {
    isbn: string;
    title: string;
    price: number;
    cover: string;
    synopsis: string[];
};

type BooksContext = {
    loading: boolean;
    setLoading: Function;
    loaded: boolean;
    setLoaded: Function;
    books: Book[];
    setBooks: Function;
    filteredBooks: Book[];
    setFilteredBooks: Function;
};

export const booksContextDefault: BooksContext = {
    loading: false,
    setLoading: () => {},
    loaded: false,
    setLoaded: () => {},
    books: [],
    setBooks: () => {},
    filteredBooks: [],
    setFilteredBooks: () => {},
};

export const BooksContext = createContext<BooksContext>(booksContextDefault);
