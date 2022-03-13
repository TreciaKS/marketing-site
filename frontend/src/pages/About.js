import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
    
function AboutPage() {
    const { id } = useParams();
    const { loading, error, estate } = useFetch(`http://localhost:1337/api/estates/${id}?populate=*`)
    if (loading) return <p> Loading... </p>;
    if (error) return <p>I'm sorry, an error has occured!</p>;
    
        return (
            <article className="">
                <h2>More Description</h2>
                <hr />
                <section className="">
                    <h2>{estate.attributes.name}</h2>
                    <div className="">
                        <div className="">
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
                                {'< Return to Home'}
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
    export default AboutPage;