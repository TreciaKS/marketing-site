// frontend/src/App.js
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavHeader from './pages/Nav';
import Homepage from './pages/Home';
    
const About = React.lazy(() => import('./pages/About'));
const Estates = React.lazy(() => import('./pages/Estate'));
    
export default function App() {
  return (
    <div>
      <NavHeader />
      <h1 className='text-red-500'>Hello</h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
            <Route
              path="estates"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                    <Estates />
                </Suspense>
              }
              />
              <Route
                path="estates/:id"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <About />
                  </Suspense>
                }
              />
            </Routes>
      </div>
    )
  }