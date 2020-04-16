import React, { FunctionComponent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import style from './Header.scss';
import { SearchWidget } from '../SearchWidget/SearchWidget';

type HeaderProps = {};

export const Header: FunctionComponent<HeaderProps> = () => {
    const location = useLocation();

    return (
        <header className={`${style.component} header has-background-primary`}>
            <h1 className={`${style.headerTitle} title`}>
                <Link to="/">Henri Potier</Link>
            </h1>
            <div className={style.widgets}>
                {location && location.pathname === '/' && <SearchWidget />}
                <CartWidget />
            </div>
        </header>
    );
};
