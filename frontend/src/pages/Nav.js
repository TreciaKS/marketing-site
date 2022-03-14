import React from 'react'
import { Link } from 'react-router-dom'
    
export default function NavHeader() {
    return (
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-yellow-500 mb-2 md:mb-0">
            <span className="ml-3 text-xl uppercase">Housed</span>
          </div>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center list-none">
                <Link 
                className="mr-5 hover:text-yellow-500"
                to="/">
                  <li>Home</li>
                </Link>
                <Link 
                className="mr-5 hover:text-yellow-500"
                to="estates">
                  <li>Estates</li>
                </Link>
                <a 
                href='https://github.com/TreciaKS/marketing-site'
                className="mr-5 hover:text-yellow-500">Github</a>
            </nav>
          </div>
        </header>
    )
}