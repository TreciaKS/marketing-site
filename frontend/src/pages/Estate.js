import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
 
export default function Estatepage() {
    const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');
    if (loading) return <p> Loading... </p>
    if (error) return <p>I'm sorry, it seems an error occured! :( </p>
    
        return (
            <div className="">
                <section className=''>
                    <h2 className=''>Wether its a studio, single or double flat, we've got you covered.</h2>
                    <p className=''>Browse through the many houses that are available to you and that fit your style! Let's get you housed.</p>
                    <hr className="" />
                    {estate.map((house) => (
                        <article className="" key={house.id}>
                            <h2 className=''>{house.attributes.name}</h2>
                            <section className="">
                                <img
                                    src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                                    alt="img"
                                    className=''
                                />
                                <div className=''>
                                    <p className=''>{house.attributes.price}</p>
                                    <p className=''>{house.attributes.description}</p>
                                    <Link 
                                    to={`${house.id}`} 
                                    className=''>
                                        Read More...
                                    </Link>
                                </div>
                            </section>
                        </article>
                    ))}
                </section>
            </div>
        )
    }