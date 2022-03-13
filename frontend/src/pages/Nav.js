import React from 'react'
import { Link } from 'react-router-dom'
    
export default function NavHeader() {
    return (
        <div className="">
          <h1 className=''>Housed</h1>
          <nav className="">
            <ul className=''>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="estates">
                <li>Estates</li>
              </Link>
              <Link to="estates">
                <li>Github</li>
              </Link>
            </ul>
          </nav>
        </div>
    )
}