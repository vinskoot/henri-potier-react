import React, { FunctionComponent } from 'react';
import style from './SearchWidget.scss';
import { useBooks } from '../../hooks/useBooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SearchWidgetProps = {};

export const SearchWidget: FunctionComponent<SearchWidgetProps> = () => {
    const { search } = useBooks();

    return (
        <div className={`${style.component}`}>
            <div className="control has-icons-left">
                <input
                    className="input"
                    type="text"
                    name="search"
                    placeholder="Rechercher"
                    onChange={(e): void => search(e.target.value)}
                />
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="search" />
                </span>
            </div>
        </div>
    );
};
