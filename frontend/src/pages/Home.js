import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
export default function Homepage() {
    const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*')
    if (loading) return <p className="flex justify-center items-center h-screen text-2xl"> Loading... </p>
    if (error) return <p className="flex justify-center items-center h-screen text-2xl"> I'm sorry, I cannot display anything at the moment</p>
    
    return (
      <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-12 mx-auto text-center">
          <div class="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-4xl">Welcome to <span class="text-yellow-500">Housed</span></h1>
                <p className="mt-6 text-gray-500 dark:text-gray-300">On your mobile or computer, you can access all of South Africa's leading Estate Agent properties for sale or rent. You can easily find and manage your favorite properties with Housed user-friendly interface.</p>
          </div>

                {estate.splice(0, 2).map((house) => (
                  <article className="text-gray-600 body-font" key={house.id}>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl pt-10 pb-10">🎇 Featured <span class="text-yellow-500">House Of The Day</span>🎇</h1>
                    <section className="container mx-auto flex px-5 items-center justify-center flex-col">
                      <img
                        className='object-cover object-center rounded shadow-xl'
                        src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
                        alt="img"
                      />
                      <div>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl pt-5">{house.attributes.name}</h2>
                        <p className="m-4 leading-relaxed text-gray-200 overflow-y-hidden h-32 lg:h-20">{house.attributes.description}</p>
                        <div className="flex justify-center pt-5">
                          <Link 
                          className="inline-flex text-gray-50 border-yellow-500 border-2 py-2 px-6 focus:outline-none hover:text-yellow-500 rounded text-lg"
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