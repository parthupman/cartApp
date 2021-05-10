import React  from "react"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,

} from "reactstrap";

const Cart = ({cartItem,removeItem,buyNow}) => {
    let ammount = 0;
    cartItem.forEach(item => {
        ammount = parseFloat(ammount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>       
                        <Row>
                            <Col>
                            <img 
                            height={80}
                            src={item.tinyImage}
                            />
                            </Col>
                            <Col className="text-center">
                            <div className="text-primary">
                                {item.ProductName}
                            </div>
            <span>price :- {item.productPrice}</span>
            <Button color="dangr" onClick={() => removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>

                    
                ))}
            </ListGroup>

            // if everything is empty
            
            {
                cartItem.length >= 1 ?(
                    <Card className="text-center mt-3">
                        <CardHeader>Grand Total</CardHeader>
                        <CardBody>
                        Your ammount for {cartItem.length} product is {ammount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>pay here</Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is empty</h1>
                ) 
            }

        </Container>
    )
}

    

export default Cart;