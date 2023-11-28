import React from'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from '../about';
import Products from '../Products';
import Home from '../home';

function Header(){
    return (
        <BrowserRouter >
            <header>
                <h2>Lobiko Pharma</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={"Navlink"}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product" className={"Navlink"}>Produits</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={"Navlink"}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Header