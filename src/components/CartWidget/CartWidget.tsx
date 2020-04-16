import React, { FunctionComponent, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './CartWidget.scss';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

type CartWidgetProps = {};

export const CartWidget: FunctionComponent<CartWidgetProps> = () => {
    const { cart } = useCart();

    const getNumberOfItemsInCart = useCallback(() => {
        return cart.reduce((acc, value) => acc + value.quantity, 0);
    }, [cart]);

    return (
        <div className={`${style.component} has-badge-rounded has-badge-info`} data-badge={getNumberOfItemsInCart()}>
            <Link to="/cart">
                <span className="icon">
                    <FontAwesomeIcon icon="shopping-cart" />
                </span>
                Panier
            </Link>
        </div>
    );
};
