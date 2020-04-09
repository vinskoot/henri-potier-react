import React, { FunctionComponent } from 'react';
import style from './Home.scss';

type HomeProps = {};

export const Home: FunctionComponent<HomeProps> = () => {
    return <div className={`text ${style.component}`}>Page d’accueil</div>;
};
