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
                                    <p className='title-font text-2xl font-medium text-gray-900 mt-6 mb-3'>{house.attributes.price}</p>
                                    <p className='leading-relaxed text-base'>{house.attributes.description}</p>
                                    <Link 
                                    to={`${house.id}`} 
                                    className='inline-flex text-gray-50 border-yellow-500 border-2 mt-3 py-2 px-6 focus:outline-none hover:text-yellow-500 rounded text-lg'>
                                        Read More
                                    </Link>
                            </section>
                        </article>
                    ))}
                    {/* 
                    
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
    </div>
    
  </div>
</section>
                    */}
                    </div>
                </section>
        )
    }
    