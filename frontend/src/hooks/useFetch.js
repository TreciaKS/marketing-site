// frontend/src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
        const [ estate, setEstate ] = useState(null);
        const [ error, setError ] = useState(null);
        const [ loading, setLoading ] = useState(true);
    
        useEffect(
            () => {
                const fetchData = async () => {
                    setLoading(true);
                    try {
                        const res = await axios.get(url);
                        setEstate(res.data.data);
                        setLoading(false);
                    } catch (error) {
                        setError(error);
                        setLoading(false);
                    }
                };
                fetchData();
            },
            [ url ]
        );
    
        return { estate, error, loading };
    }

// frontend/src/pages/about/About.js
import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import classes from './about.module.css';
    import useFetch from '../../hooks/useFetch';
    
    function AboutPage() {
        const { id } = useParams();
        const { loading, error, estate } = useFetch(`http://localhost:1337/api/estates/${id}?populate=*`);
        if (loading) return <p> Loading... </p>;
        if (error) return <p> Error :( </p>;
    
        return (
            <article className={classes.aboutPage}>
                <h2>More Description</h2>
                <hr />
                <section className={classes.aboutBoard}>
                    <h2>{estate.attributes.name}</h2>
                    <div className={classes.aboutDescription}>
                        <div className={classes.aboutImgContainer}>
                            {estate.attributes.image.data ? (
                                estate.attributes.image.data.map((pic) => (
                                    <img
                                        src={`http://localhost:1337${pic.attributes.url}`}
                                        alt="img"
                                        key={pic.attributes.id}
                                    />
                                ))
                            ) : (
                                <img
                                    src={`http://localhost:1337${estate.attributes.image.data.attributes.url}`}
                                    alt="img"
                                />
                            )}
                        </div>
                        <div>
                            <h3>{estate.attributes.price}</h3>
                            <p>{estate.attributes.description}</p>
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    background: 'black',
                                    color: 'white',
                                    border: '1px solid black',
                                    padding: '5px 10px'
                                }}
                            >
                                {'< Back to Home'}
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
    export default AboutPage;

// frontend/src/pages/estates/Estates.js
import React from 'react';
    import { Link } from 'react-router-dom';
    import useFetch from '../../hooks/useFetch';
    import classes from './estates.module.css';
    
    export default function Estatepage() {
        const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');
        if (loading) return <p> Loading... </p>;
        if (error) return <p> Error :( </p>;
    
        return (
            <div className={classes['estates']}>
                <section>
                    <h2>Available Houses</h2>
                    <hr className={classes['horizontal-rule']} />
                    {estate.map((house) => (
                        <article className={classes['article']} key={house.id}>
                            <h2>{house.attributes.name}</h2>
                            <section className={classes['article-description']}>
                                <img
                                    src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                                    alt="img"
                                />
                                <div>
                                    <p>{house.attributes.price}</p>
                                    <p>{house.attributes.description}</p>
                                    <Link to={`${house.id}`}>See More...</Link>
                                </div>
                            </section>
                        </article>
                    ))}
                </section>
            </div>
        );
    }

// frontend/src/pages/home/Home.js
import React from 'react';
    import { Link } from 'react-router-dom';
    import useFetch from '../../hooks/useFetch';
    import classes from './home.module.css';
    
    export default function Homepage() {
      const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');
      if (loading) return <p> Loading... </p>;
      if (error) return <p> Error :( </p>;
    
      return (
        <div className={classes['home']}>
          <section>
            <h2>Welcome to our Estate</h2>
            <hr className={classes['horizontal-rule']} />
            <p>We help you find your new home</p>
    
          <form className={classes["home-form"]}>
            <h5>Interested in joining our Newsletter</h5>
            <h6>Sign up with your email below</h6>
    
            <label htmlFor="email">
              Email Address:
              <input type="email" />
            </label>
            <button>Signup</button>
          </form>
            {estate.splice(0, 2).map((house) => (
              <article className={classes['home-article']} key={house.id}>
                <h2>{house.attributes.name}</h2>
                <section className={classes['home-article-description']}>
                  <img
                    src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                    alt="img"
                  />
                  <div>
                    <p>{house.attributes.price}</p>
                    <p>{house.attributes.description}</p>
                    <Link to={`estates/${house.id}`}>See More...</Link>
                  </div>
                </section>
              </article>
            ))}
          </section>
        </div>
      );
    }

// frontend/src/pages/nav/Nav.js
import React from 'react';
    import { Link } from 'react-router-dom';
    import classes from './nav.module.css';
    
    export default function NavHeader() {
      return (
        <div className={classes.navBar}>
          <h1>My Estate</h1>
          <nav className={classes.navLink}>
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

// frontend/src/App.js
import React, { Suspense } from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './pages/nav/Nav';
    import Home from './pages/home/Home';
    
    const About = React.lazy(() => import('./pages/about/About'));
    const Estates = React.lazy(() => import('./pages/estates/Estates'));
    
    export default function App() {
        return (
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
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
        );
    }