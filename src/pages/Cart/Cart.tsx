import React, { FunctionComponent } from 'react';
import style from './Cart.scss';

type CartProps = {};

export const Cart: FunctionComponent<CartProps> = () => {
    return <div className={`text ${style.component}`}>Panier</div>;
};
