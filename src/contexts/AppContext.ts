import { createContext } from 'react';

type AppContext = {
    location: Location | null;
    setLocation: Function;
};

export const appContextDefault: AppContext = {
    location: null,
    setLocation: () => {},
};

export const AppContext = createContext<AppContext>(appContextDefault);
