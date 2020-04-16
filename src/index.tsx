import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles/main.scss';
import { App } from './components/App/App';

// Icons library for the app
library.add(faShoppingCart, faSearch);

const rootElement = document.getElementById('react-app');
render(<App />, rootElement);
