import React from 'react'
import { useSelector } from 'react-redux'
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart'

function Home() {

    const inventory = useSelector((state) => state.inventory.inventory);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    return (
        <Container style={{ width: '500px' }}>
            <h1>Home</h1>
            {inventory.map((item) => {
                return (
                    <Card style={{ backgroundColor: 'cyan', margin: '5px' }} key={item.id}>

                        <Card.Header>
                            <Card.Title>Name: {item.name}</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Card.Text>Price: ${item.price}</Card.Text>
                        </Card.Body>

                        <HiOutlineShoppingCart onClick={() => { dispatch(addToCart({ name: item.name, price: item.price, quantity: item.quantity + 1 })) }} />
                    </Card>
                )
                console.log(cart)
            })}
        </Container>
    )
}

export default Home;