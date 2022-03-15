import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
export default function Homepage() {
    const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*')
    if (loading) return <p className="flex items-center justify-center h-screen text-2xl"> Loading... </p>
    if (error) return <p className="flex items-center justify-center h-screen text-2xl"> I'm sorry, I cannot display anything at the moment</p>
    
    return (
      <section className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-12 mx-auto text-center">
          <div className="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-4xl">Welcome to <span class="text-yellow-500">Housed</span></h1>
                <p className="mt-6 text-gray-500 dark:text-gray-300">On your mobile or computer, you can access all of South Africa's leading Estate Agent properties for sale or rent. You can easily find and manage your favorite properties with Housed user-friendly interface.</p>
                <h1 className="pt-10 pb-10 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">🎇 Featured <span class="text-yellow-500">Houses Of The Day</span>🎇</h1>
          </div>

                {estate.splice(0, 2).map((house) => (
                  <article className="text-gray-200 body-font" key={house.id}>
                    <br />
                    <section className="container flex flex-col items-center justify-center px-5 mx-auto">
                      <img
                        className='object-cover object-center rounded shadow-xl'
                        src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                        alt="img"
                      />
                      <div>
                      <h2 className="pt-5 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">{house.attributes.name}</h2>
                        <p className="h-32 m-4 overflow-y-hidden leading-relaxed text-gray-200 lg:h-20">{house.attributes.description}</p>
                        <div className="flex justify-center pt-5">
                          <Link 
                          className="inline-flex px-6 py-2 text-lg border-2 border-yellow-500 rounded text-gray-50 focus:outline-none hover:text-yellow-500"
                          to={`estates/${house.id}`}>
                            Read More
                          </Link>
                        </div>
                      </div>
                    </section>
                  </article>
                ))}
            </div>
          </section>
      )
    }