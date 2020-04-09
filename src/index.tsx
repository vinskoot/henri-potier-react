import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App/App';
import './styles/main.scss';

const rootElement = document.getElementById('react-app');

render(<App />, rootElement);
