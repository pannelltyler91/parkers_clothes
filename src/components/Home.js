import React from 'react'
import {useSelector} from 'react-redux'

function Home () {

    const inventory = useSelector((state)=> state.inventory.inventory)
    return(
        <div>
            <h1>Home</h1>
            {inventory.map((item) =>{
                return(
                <ul key={item.id}>
                    <li>Name:{item.name}</li>
                    <li>Price:${item.price}</li>
                </ul>
                )
            })}
        </div>
    )
}

export default Home;