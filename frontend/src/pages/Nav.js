// frontend/src/pages/nav/Nav.js
import React from 'react'
import { Link } from 'react-router-dom'
    
export default function NavHeader() {
    return (
        <div className="">
          <h1>My Estate</h1>
          <nav className="">
            <ul>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <li>Home</li>
              </Link>
              <Link to="estates" style={{ textDecoration: 'none' }}>
                <li>Estates</li>
              </Link>
            </ul>
          </nav>
        </div>
    );
}