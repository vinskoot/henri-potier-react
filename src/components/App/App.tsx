import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.scss';
import { Home } from '../../pages/Home/Home';
import { NoRoute } from '../../pages/NoRoute/NoRoute';
import { Cart } from '../../pages/Cart/Cart';
import { BooksContext, booksContextDefault, Book } from '../../contexts/BooksContext';
import { CartContext, cartContextDefault, CartItem } from '../../contexts/CartContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [booksLoading, setBooksLoading] = useState(false);
    const [booksLoaded, setBooksLoaded] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    return (
        <div className={`${style.component} container`}>
            <BooksContext.Provider
                value={{
                    ...booksContextDefault,
                    books,
                    setBooks,
                    loading: booksLoading,
                    setLoading: setBooksLoading,
                    loaded: booksLoaded,
                    setLoaded: setBooksLoaded,
                    filteredBooks,
                    setFilteredBooks,
                }}
            >
                <CartContext.Provider value={{ ...cartContextDefault, cart, setCart }}>
                    <Router>
                        <Header />
                        <section className="section page">
                            <Switch>
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                                <Route path="*">
                                    <NoRoute />
                                </Route>
                            </Switch>
                        </section>
                        <Footer />
                    </Router>
                </CartContext.Provider>
            </BooksContext.Provider>
        </div>
    );
};
