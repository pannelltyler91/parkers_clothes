import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCartDash } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../features/cart";

function Cart(props) {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = useSelector((state) => state.cart.cartCount)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart({cartCount})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cart.map((item) => {
            return (
              <Card key={item.name} style={{ color: "blue" }}>
                <Card.Header>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Quantity:({item.quantity})</Card.Text>
                  <BsCartDash onClick={() =>
                      dispatch(
                        removeFromCart({
                          name: item.name,
                          price: item.price,
                          quantity: item.quantity,
                          id:item.id
                        })
                      )
                    } />
                  <BsCartPlusFill
                    onClick={() =>
                      dispatch(
                        addToCart({
                          name: item.name,
                          price: item.price,
                          quantity: item.quantity + 1,
                          id:item.id
                        })
                      )
                    }
                  />
                </Card.Body>
              </Card>
            );
          })}
    
        </Container>
      </Modal.Body>
      <Modal.Footer>
          <Modal.Title>Total:${total}</Modal.Title>
        <Button onClick={props.onHide}>Close</Button>
        <Button >Checkout</Button>

      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
