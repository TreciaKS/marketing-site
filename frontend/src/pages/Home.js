// frontend/src/pages/home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
    
    export default function Homepage() {
      const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');
      if (loading) return <p> Loading... </p>;
      if (error) return <p> Error :( </p>;
    
      return (
        <div className="">
          <section>
            <h2>Welcome to our Estate</h2>
            <hr className="" />
            <p>We help you find your new home</p>
    
          <form className="">
            <h5>Interested in joining our Newsletter</h5>
            <h6>Sign up with your email below</h6>
    
            <label htmlFor="email">
              Email Address:
              <input type="email" />
            </label>
            <button>Signup</button>
          </form>
            {estate.splice(0, 2).map((house) => (
              <article className="" key={house.id}>
                <h2>{house.attributes.name}</h2>
                <section className="">
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