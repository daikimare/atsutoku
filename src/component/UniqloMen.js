// modules
import React, { useState, useEffect } from 'react'
// components
import { Loader } from './Loader'
import { ItemCard } from './ItemCard'

export const UniqloMen = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        return await fetch('/api/uniqlo/men').then((response) => response.json())
    }

    useEffect(() => {
        getData().then((response) => setData(response))
    }, [])

    if (!data?.length) {
        return <Loader />
    }
    return (
        <>
            <div className="inner">
                <h2 className="section">UNIQLO (MEN)</h2>
                <div className="container">
                    {data?.map((data) => (
                        <ItemCard
                            key={data.src}
                            title={data.title}
                            link={data.link}
                            img={data.img}
                            price={data.price}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
