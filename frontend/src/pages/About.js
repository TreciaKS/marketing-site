import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
export default function AboutPage() {
    const { id } = useParams();
    const { loading, error, estate } = useFetch(`http://localhost:1337/api/estates/${id}?populate=*`)
    if (loading) return <p className="flex justify-center items-center h-screen text-2xl"> Loading... </p>;
    if (error) return <p className="flex justify-center items-center h-screen text-2xl">I'm sorry, an error has occured!</p>;
    
        return (
            <article className="bg-white dark:bg-gray-800">
                <div className="container px-6 py-12 mx-auto text-center">
                    <div className="mx-auto">   
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 md:text-4xl">{estate.attributes.name}</h2>
                    
                    <section className="text-gray-200 container mx-auto flex px-5 items-center justify-center flex-col">
                        <h2 className='text-xl font-bold text-gray-800 dark:text-gray-300 md:text-xl pt-5 pb-5'>Would you like to view this house or explore similar ones in your desired area? <span className='underline'>Contact Us</span>!</h2>
                        <div className="">
                            <div className="flex justify-center items-center">
                                {estate.attributes.image.data ? (
                                    estate.attributes.image.data.map((pic) => (
                                        <img
                                            className='object-cover object-center rounded-xl w-5/6 pt-5'
                                            src={`http://localhost:1337${pic.attributes.url}`}
                                            alt="img"
                                            key={pic.attributes.id}
                                        />
                                    ))
                                ) : (
                                    <img
                                        src={`http://localhost:1337${estate.attributes.image.data.attributes.url}`}
                                        alt="img"
                                        className=''
                                    />
                                )}
                            </div>
                            <div className='pt-10'>
                                <h3 className='text-3xl pb-5'>Price: {estate.attributes.price}</h3>
                                <p className='lg:text-lg text-base leading-relaxed'>{estate.attributes.description}</p>
                                <div className="flex justify-center pt-5">
                                    <Link 
                                    className="inline-flex text-gray-50 border-yellow-500 border-2 py-2 px-6 focus:outline-none hover:text-yellow-500 rounded text-lg"
                                    to={'/'}
                                    >
                                    Return To Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
              </div>
            </article>
        )
}
