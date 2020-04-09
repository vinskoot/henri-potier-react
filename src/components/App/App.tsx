import React, { FunctionComponent } from 'react';
import style from './App.scss';

type AppProps = {
    name: string;
};

export const App: FunctionComponent<AppProps> = ({ name }) => {
    return <div className={`text ${style.component}`}> Hello World {name}! </div>;
};
