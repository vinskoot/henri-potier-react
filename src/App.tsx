import React, { FunctionComponent } from 'react';

type AppProps = {
    name: string;
};

export const App: FunctionComponent<AppProps> = ({ name }) => {
    return <div> Hello World {name}! </div>;
};
