import React, { FunctionComponent } from 'react';
import { BooksList } from '../../components/BooksList/BooksList';

type HomeProps = {};

export const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <h1 className="title">Page d’accueil</h1>
            <BooksList />
        </>
    );
};
