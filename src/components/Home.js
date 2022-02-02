import React, {useState} from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BsFillCartDashFill} from 'react-icons/bs'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import Cart from "./Cart";


function Home() {
  const inventory = useSelector((state) => state.inventory.inventory);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Cart show={modalShow} onHide={() => setModalShow(false)} />

      <Container style={{ width: "500px" }}>
        <h1>Home</h1>
        <Button onClick={() => setModalShow(true)}><BsFillCartDashFill/></Button>
        {inventory.map((item) => {
          return (
            <Card
              style={{ backgroundColor: "cyan", margin: "5px" }}
              key={item.id}
            >
              <Card.Header>
                <Card.Title>Name: {item.name}</Card.Title>
              </Card.Header>

              <Card.Body>
                <Card.Text>Price: ${item.price}</Card.Text>
              </Card.Body>

              <HiOutlineShoppingCart
                onClick={() => {
                  dispatch(
                    addToCart({
                      name: item.name,
                      price: item.price,
                      quantity: item.quantity + 1,
                      id:item.id
                    })
                  );
                }}
              />
            </Card>
          );
        })}
      </Container>
    </Container>
  );
}

export default Home;
