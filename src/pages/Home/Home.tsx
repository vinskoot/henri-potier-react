import React, { FunctionComponent } from 'react';
import style from './Home.scss';
import { BooksList } from '../../components/BooksList/BooksList';
import { SearchWidget } from '../../components/SearchWidget/SearchWidget';

type HomeProps = {};

export const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className={`text ${style.component}`}>
            <h1>Page d’accueil</h1>
            <SearchWidget />
            <BooksList />
        </div>
    );
};
