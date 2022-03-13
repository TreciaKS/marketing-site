import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
export default function AboutPage() {
    const { id } = useParams();
    const { loading, error, estate } = useFetch(`http://localhost:1337/api/estates/${id}?populate=*`)
    if (loading) return <p> Loading... </p>;
    if (error) return <p>I'm sorry, an error has occured!</p>;
    
        return (
            <article className="">
                <h2 className=''>Would you like to view this house or explore similar ones in your desired area? <span className='underline'>Contact Us</span>!</h2>
                <hr className='' />
                <section className="">
                    <h2 className=''>{estate.attributes.name}</h2>
                    <div className="">
                        <div className="">
                            {estate.attributes.image.data ? (
                                estate.attributes.image.data.map((pic) => (
                                    <img
                                    className=''
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
                        <div>
                            <h3 className=''>{estate.attributes.price}</h3>
                            <p className=''>{estate.attributes.description}</p>
                            <Link
                            className=''
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    background: 'black',
                                    color: 'white',
                                    border: '1px solid black',
                                    padding: '5px 10px'
                                }}
                            >
                                {'< Return to Home'}
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        )
}
