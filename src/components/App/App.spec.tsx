import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App name="Vincent" />, div);
        ReactDOM.unmountComponentAtNode(div);

        expect(true).toBe(true);
    });
});
