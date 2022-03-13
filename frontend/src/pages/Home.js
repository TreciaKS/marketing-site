// frontend/src/pages/home/Home.js
import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
export default function Homepage() {
    const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*')
    if (loading) return <p> Loading... </p>
    if (error) return <p> I'm sorry, I cannot display anything at the moment</p>
    
    return (
        <div className="">
          <section>
            <h2 className="text-red-200">Welcome to Housed</h2>
            <hr className="" />
            <p>On your mobile or computer, you can access all of South Africa's leading Estate Agent properties for sale or rent. You can easily find and manage your favorite properties with Housed user-friendly interface.</p>
    
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
                    <Link to={`estates/${house.id}`}>View Page...</Link>
                  </div>
                </section>
              </article>
            ))}
          </section>
        </div>
      )
    }