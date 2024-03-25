import { Component } from "react";
import './menu.css';
import MenuHeader from "./menu-header/menu-header";
import MenuMessages from "./menu-messages/menu-messages";
import MenuSearch from "./menu-search/menu-search";

const Menu = () => {
    return (
        <div id='Menu'>

            <MenuHeader /> 

            <MenuSearch />
            
            <MenuMessages />

        </div>
    );
}

export default Menu;