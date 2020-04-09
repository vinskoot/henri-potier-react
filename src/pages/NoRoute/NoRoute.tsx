import React, { FunctionComponent } from 'react';
import style from './NoRoute.scss';

type NoRouteProps = {};

export const NoRoute: FunctionComponent<NoRouteProps> = () => {
    return <div className={`${style.component}`}>404 - Page non trouvée</div>;
};
