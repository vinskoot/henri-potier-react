import React, { FunctionComponent } from 'react';
import style from './SearchWidget.scss';
import { useBooks } from '../../hooks/useBooks';

type SearchWidgetProps = {};

export const SearchWidget: FunctionComponent<SearchWidgetProps> = () => {
    const { search } = useBooks();

    return (
        <div className={`${style.component}`}>
            Recherche : <input type="text" name="search" onChange={(e): void => search(e.target.value)} />
        </div>
    );
};
