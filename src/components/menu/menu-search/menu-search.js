import React from 'react';
import './menu-search.css';

const MenuSearch = () => {
    return (
        <div id='search'>
            <section>
                <div className="search-icon" />
                <input placeholder="Pesquisar ou começar uma nova conversa" />
            </section>
        </div>
    );
}

export default MenuSearch;
