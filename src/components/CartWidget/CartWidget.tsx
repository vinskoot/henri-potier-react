import React, { FunctionComponent, useCallback } from 'react';
import style from './CartWidget.scss';
import { useCart } from '../../hooks/useCart';

type CartWidgetProps = {};

export const CartWidget: FunctionComponent<CartWidgetProps> = () => {
    const { cart } = useCart();

    const getNumberOfItemsInCart = useCallback(() => {
        return cart.reduce((acc, value) => acc + value.quantity, 0);
    }, [cart]);

    return <div className={`${style.component}`}>Eléments dans le panier : {getNumberOfItemsInCart()}</div>;
};
