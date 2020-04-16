import React, { FunctionComponent } from 'react';

type NoRouteProps = {};

export const NoRoute: FunctionComponent<NoRouteProps> = () => {
    return <h1 className="title">404 - Page non trouvée</h1>;
};
