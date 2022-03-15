import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
 
export default function Estatepage() {
    const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');
    if (loading) return <p className="flex justify-center items-center h-screen text-2xl"> Loading... </p>;
    if (error) return <p className="flex justify-center items-center h-screen text-2xl">I'm sorry, an error has occured!</p>;
    
        return (
            <section className='body-font dark:bg-gray-800'>
                <div className="container px-5 py-24 mx-auto">
                    {/* <h2 className=''>Wether its a studio, single or double flat, we've got you covered.</h2>
                    <p className=''>Browse through the many houses that are available to you and that fit your style! Let's get you housed.</p> */}
                    
                    {estate.map((house) => (
                        <article className="flex justify-center -mx-4 -mb-10 text-center" key={house.id}>
                            <section className="sm:w-1/2 mb-10 px-4 mt-8">
                                <div className='rounded-lg h-64 overflow-hidden'>
                                <img
                                    src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                                    alt="House On Sale"
                                    className='object-cover object-center h-full w-full'
                                />
                                </div>
                                    <p className='title-font text-2xl font-medium mt-6 mb-3 text-gray-100'>{house.attributes.name}</p>
                                    <p className='leading-relaxed text-base text-gray-300 overflow-y-hidden h-32 lg:h-20'>{house.attributes.description}</p>
                                    <Link 
                                    to={`${house.id}`} 
                                    className='inline-flex text-gray-50 border-yellow-500 border-2 mt-3 py-2 px-6 focus:outline-none hover:text-yellow-500 rounded text-lg'>
                                        Read More
                                    </Link>
                            </section>
                        </article>
                    ))}
                    </div>
                </section>
        )
    }
    