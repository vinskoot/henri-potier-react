import React, { FunctionComponent } from 'react';
import style from './Footer.scss';

type FooterProps = {};

export const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className={`${style.component} footer has-background-grey-lighter`}>
            © {new Date().getFullYear()} Vincent COUTY
        </footer>
    );
};
