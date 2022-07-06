import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Card,
  Button,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => 
  state.productDetails);
  const { loading, error, product } = productDetails;
  // const product = products.find((p) => p._id === id)
  // const [product, setProduct] = useState({}); //changed
  // const [product, setProduct] = useState(null)

  useEffect(() => {
    dispatch(listProductDetails(`${id}`));

    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${id}`);

    //   setProduct(data);
    // };
    // fetchProduct();
  }, [dispatch, match, id]);

  const history = useNavigate();

  const addToCartHandler = () => {
    // history.push(`/cart/${match.params.id}?qty=${qty}`)
    history(`/cart/${id}?qty=${qty}`)
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                {" "}
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Booking Fee:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "Available" : "Not Available"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Patient No.:</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                  onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.counInStock === 0}
                  >
                    {" "}
                    Confirm Appointment
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;




// import React, { useState, useEffect} from 'react'
// import { Link, useParams  } from 'react-router-dom'
// import { useDispatch, useSelector} from 'react-redux'
// import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
// import Rating from '../components/Rating'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { listProductDetails } from '../actions/productActions'


// const ProductScreen = ({match}) => {
//   const {id} = useParams();
//   console.log(id)
  
// const [qty,setQty] = useState(0)

//   const dispatch = useDispatch()

//   const productDetails = useSelector(state => state.productDetails)
//   const { loading, error, product} = productDetails


//   useEffect(() => {
//     dispatch(listProductDetails(id));
//   }, [dispatch, match]);
  
//   return ( <>
//     <Link className='btn btn-light my-3' to='/'>
//       Go Back
//     </Link>
//     {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
//       <Row>
//       <Col md={6}>
//         <Image src={product.image} alt={product.name} fluid />
//       </Col>
//       <Col md={3}>
//        <ListGroup variant='flush'>
//         <ListGroup.Item>
//           <h3>{product.name}</h3>
//        </ListGroup.Item>
//        <ListGroup.Item>
//          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//        </ListGroup.Item>
//        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
//        <ListGroup.Item> Description: {product.description}</ListGroup.Item>
//        </ListGroup>
//       </Col>
//       <Col md={3}>
//         <Card>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <Row>
//                 <Col>
//                   Price:
//                 </Col>
//                 <Col>
//                  <strong>${product.price}</strong>
//                 </Col>
//               </Row>
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <Row>
//                 <Col>
//                   Status:
//                 </Col>
//                 <Col>
//                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                 </Col>
//               </Row>
//             </ListGroup.Item>

//               {product.countInStock > 0 && (
//                 <ListGroup.Item>
//                   <Row>
//                     <Col>Qty</Col>
//                     <Col>
//                       <Form.Control 
//                       as='select' 
//                       value={qty} 
//                       onChange={(e) => 
//                         setQty(e.target.value)}
//                         >

//                           {
//                           [...Array(product.countInStock).keys()].map((x) => (
//                             <option key={x+1} value={x+1}>
//                               {x+1}
//                             </option>
//                           ))}
//                         </Form.Control>
                    
//                     </Col>
//                   </Row>
//                 </ListGroup.Item>
//               )}  

//             <ListGroup.Item>
//               <Button className= 'btn-block' type='button' disabled = {product.counInStock === 0}> Add To Cart</Button>
               
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Col>
//     </Row>

//     )}
    
//   </>
//   )
// }

// export default ProductScreen






// import React, {useState, useEffect} from 'react'
// import { Link, useParams  } from 'react-router-dom'
// import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
// import Rating from '../components/Rating'
// import axios from 'axios'


// const ProductScreen = ({match}) => {
//   const {id} = useParams();
//   console.log(id)
//   // const product = products.find((p) => p._id === id)
//   const [product, setProduct] = useState(null); //changed
//   // const [product, setProduct] = useState(null)
  
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const product = await axios.get(`/api/products/${id}`);
      
//       setProduct(product.data);
//     };

//     fetchProduct();
//   }, [match]);
  
//  if(!product) return null;

 
//   return ( <>
//     <Link className='btn btn-light my-3' to='/'>
//       Go Back
//     </Link>
//     <Row>
//       <Col md={6}>
//         <Image src={product.image} alt={product.name} fluid />
//       </Col>
//       <Col md={3}>
//        <ListGroup variant='flush'>
//         <ListGroup.Item>
//           <h3>{product.name}</h3>
//        </ListGroup.Item>
//        <ListGroup.Item>
//          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//        </ListGroup.Item>
//        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
//        <ListGroup.Item> Description: {product.description}</ListGroup.Item>
//        </ListGroup>
//       </Col>
//       <Col md={3}>
//         <Card>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <Row>
//                 <Col>
//                   Price:
//                 </Col>
//                 <Col>
//                  <strong>${product.price}</strong>
//                 </Col>
//               </Row>
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <Row>
//                 <Col>
//                   Status:
//                 </Col>
//                 <Col>
//                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                 </Col>
//               </Row>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Button className= 'btn-block' type='button' disabled = {product.counInStock === 0}> Add To Cart</Button>
               
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Col>
//     </Row>

//   </>
//   )
// }

// export default ProductScreen