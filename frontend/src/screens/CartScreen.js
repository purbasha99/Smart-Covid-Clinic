// import React, { useEffect } from 'react'
// import { useSearchParams, useParams, Link} from 'react-router-dom'
// import { useDispatch, useSelector} from 'react-redux'
// import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
// import Message from '../components/Message'
// import { addTocart } from '../actions/cartActions'

// const cartScreen = ({ match, location, history}) => {
//    const {id} = useParams()
//    const productId = id;
   
//   //  console.log(qty)
//   // const productId = (`${match.id}`)
  
//   const [searchParams] = useSearchParams();

//    const qty =
//    [...searchParams].length > 0 ? Number([...searchParams][0][1]) : 1;

//   // const qty = location.search ? Number(location.search.split('=')[1]) :  1

//   const dispatch = useDispatch()

//   const cart = useSelector(state => state.cart)
//   const { cartItems } = cart

//   useEffect(() => {
//     if(productId) {
//      dispatch(addTocart(productId, qty))
//     }
//   }, [dispatch, productId, qty])

  

//    console.log(qty)


    

// export default cartScreen





// import React, { useState, useEffect } from 'react'
// import { Link} from 'react-router-dom'
// import { useDispatch, useSelector} from 'react-redux'
// import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
// import Message from '../components/Message'
// import { addTocart } from '../actions/cartActions'

// const cartScreen = ({ match, location, history}) => {

//    const productId = (`match${id}`)
   
//    console.log(qty)
//   // const productId = (`${match.id}`)
  

//   const qty = location.search ? Number(location.search.split('=')[1]) :  1

//   const dispatch = useDispatch()

//   const cart = useSelector(state => state.cart)
//   const { cartItems } = cart

//   useEffect(() => {
//     if(productId) {
//      dispatch(addTocart(productId, qty))
//     }
//   }, [dispatch, productId, qty])

  

//   console.log(qty)

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   Image,
//   ListGroup,
//   Card,
//   Button,
//   Form,
// } from "react-bootstrap";
// import Rating from "../components/Rating";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import { lisProductDetails } from "../actions/cartActions";

// const cartScreen = ({ match }) => {
//   const { id } = useParams();

//   const [qty, setYear] = useState(0);

//   const dispatch = useDispatch();

//   const productDetails = useSelector((state) => state.productDetails);
//   const { cartItems } = cartDetails;

//   useEffect(() => {
//     dispatch(listProductDetails(id));
//   }, [dispatch, match]);

//   const navigate = useNavigate();

//   // const addTocartHandler = () => {
//   //   navigate(`/cart/${id}?qty=${qty}`);
//   // };


//   return <Row>
//     <Col md={8}>
//       <h1>Shopping cart</h1>
//       {cartItems.length ===0 ? (
//       <Message>Your cart is empty<Link to='/'>Go Back</Link>
//       </Message>
//       ) : (
//         <ListGroup variant='flush'></ListGroup>
//        ) }
//     </Col>
//     <Col md={2}>

//     </Col>
//     <Col md={2}>

//     </Col>
//   </Row>
  
// }

// export default cartScreen







// import React, { useEffect } from 'react'
// import {useSearchParams, useParams, useLocation} from 'react-router-dom'
// import { Link} from 'react-router-dom'
// import { useDispatch, useSelector} from 'react-redux'
// import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
// import Message from '../components/Message'
// import { addTocart } from '../actions/cartActions'

// const cartScreen = ( history) => {
//   const {id} = useParams()
//   const productId = id;
//   // const location = useLocation()

//   //  const productId = (`match${id}`)
   
   
//   // const productId = (`${match.id}`)
//   // const [searchParams] = useSearchParams();
//   const location = useLocation()

//   // const qty =
//   //   [...searchParams].length > 0 ? Number([...searchParams][0][1]) : 1;

//   const qty =
//   location.length > 0 ? Number(location[0][1]) : 1;

//   // const qty = location.search ? Number(location.search.split('=')[1]) :  1
//   // console.log(qty)
//   const dispatch = useDispatch()

//   const cart = useSelector(state => state.cart)
//   const { cartItems } = cart

//   useEffect(() => {
//     if(productId) {
//      dispatch(addTocart(productId, qty))
//     }
//   }, [dispatch, productId, qty])

  

//   console.log(qty)


//   return <Row>
//     <Col md={8}>
//       <h1>Shopping cart</h1>
//       {cartItems.length ===0 ? (
//       <Message>Your cart is empty<Link to='/'>Go Back</Link>
//       </Message>
//       ) : (
//         <ListGroup variant='flush'></ListGroup>
//        ) }
//     </Col>
//     <Col md={2}>

//     </Col>
//     <Col md={2}>

//     </Col>
//   </Row>
  
// }

// export default cartScreen

// mnbv//

// import React, { useEffect } from "react";
// import {
//   Link,
//   useParams,
//   useSearchParams,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";
// import Message from "../components/Message";
// import { addTocart } from "../actions/cartActions";

// const cartScreen = ({ match }) => {
//   const { id } = useParams();
//   const productId = id;

//   const location = useLocation();

//   const navigate = useNavigate();

//   const [searchParams] = useSearchParams();

//   const qty =
//     [...searchParams].length > 0 ? Number([...searchParams][0][1]) : 1;

//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   // const [ cartItems ] = cart;

//   let cartItems  = [];
//   cartItems = cart

//   console.log(cartItems);

//   useEffect(() => {
//     if (productId) {
//       dispatch(addTocart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);

//   const removeProductHandler = (id) => {
//     // dispatch(removeProduct(id));
//     console.log()
//   };

//   const submitHandler = () => {
//     navigate(`/login?redirect=${"/shipping"}`);
//   };

//   return (
//     <Row>
//       <Col md={8}>
//         <h2>Added Product</h2>
//         {cartItems.length === 0 ? (
//           <Message>
//             Your have not added any product <Link to="/">Go Back</Link>
//           </Message>
//         ) : (
//           <ListGroup variant="flush">
//             {cartItems.map((item) => (
//               <ListGroup.Item key={item.product}>
//                 <Row>
//                   <Col md={2}>
//                     <Image src={item.image} alt={item.name} fluid rounded />
//                   </Col>
//                   <Col md={3}>
//                     <Link to={`/product/${item.product}`}>{item.name}</Link>
//                   </Col>
//                   <Col md={2}>${item.price}</Col>
//                   <Col md={2}>
//                     <Form.Control
//                       as="select"
//                       value={item.qty}
//                       onChange={(e) =>
//                         dispatch(addTocart(item.product, Number(e.target.value)))
//                       }
//                     >
//                       {[...Array(item.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                   </Col>
//                   <Col md={2}>
//                     <Button
//                       type="button"
//                       variant="light"
//                       onClick={() => removeProductHandler(item.product)}
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         )}
//       </Col>
//       <Col md={4}>
//         <Card>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h2>
//                 Total (
//                 {cartItems.reduce((acc, item) => acc + item.qty, 0)})
//                 Years
//               </h2>
//               $
//               {cartItems
//                 .reduce((acc, item) => acc + item.qty * item.price, 0)
//                 .toFixed(2)}
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Button
//                 type="button"
//                 className="btn-block"
//                 disabled={cartItems.length === 0}
//                 onClick={submitHandler}
//               >
//                 Proceed to Submit
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default cartScreen;


// import React, { useEffect } from "react";
// import {
//   Link,
//   useParams,
//   useSearchParams,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";
// import Message from "../components/Message";
// import { addToCart /*removeProduct */} from "../actions/cartActions";

// const SubscribeScreen = ({ match }) => {
//   const { id } = useParams();
//   const productId = id;

//   const location = useLocation();

//   const navigate = useNavigate();

//   const [searchParams] = useSearchParams();

//   const qty =
//     [...searchParams].length > 0 ? Number([...searchParams][0][1]) : 1;

//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   console.log(cartItems);

//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);

//   // const removeProductHandler = (id) => {
//   //   dispatch(removeProduct(id));
//   // };

//   const submitHandler = () => {
//     navigate(`/login?redirect=${"/shipping"}`);
//   };

//   return (
//     <Row>
//       <Col md={8}>
//         <h2>Added Product</h2>
//         {cartItems.length === 0 ? (
//           <Message>
//             Your have not added any product <Link to="/">Go Back</Link>
//           </Message>
//         ) : (
//           <ListGroup variant="flush">
//             {cartItems.map((item) => (
//               <ListGroup.Item key={item.product}>
//                 <Row>
//                   <Col md={2}>
//                     <Image src={item.image} alt={item.name} fluid rounded />
//                   </Col>
//                   <Col md={3}>
//                     <Link to={`/product/${item.product}`}>{item.name}</Link>
//                   </Col>
//                   <Col md={2}>${item.price}</Col>
//                   <Col md={2}>
//                     <Form.Control
//                       as="select"
//                       value={item.qty}
//                       onChange={(e) =>
//                         dispatch(addToCart(item.product, Number(e.target.value)))
//                       }
//                     >
//                       {[...Array(item.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                   </Col>
//                   <Col md={2}>
//                     <Button
//                       type="button"
//                       variant="light"
//                       //onClick={() => removeProductHandler(item.product)}
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         )}
//       </Col>
//       <Col md={4}>
//         <Card>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h2>
//                 Total (
//                 {cartItems.reduce((acc, item) => acc + item.qty, 0)})
//                 Years
//               </h2>
//               $
//               {cartItems
//                 .reduce((acc, item) => acc + item.qty * item.price, 0)
//                 .toFixed(2)}
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Button
//                 type="button"
//                 className="btn-block"
//                 disabled={cartItems.length === 0}
//                 onClick={submitHandler}
//               >
//                 Proceed to Submit
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default SubscribeScreen;


//////


import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams()
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // const qty = location.length > 0 ? Number(location[0][1]) : 1;
  // console.log(qty);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
    console.log("remove");
  };

  const checkoutHandler = () => {
    console.log("checkout");
    navigate(`/login?redirect=${"/shipping"}`);
  };

  console.log(cartItems);

  return (
    
    <Row>
      <Col md={8}>
        <h1>APPOINTMENTS</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty <Link to="/">GO Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems &&
              cartItems.map((item, i) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                TOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                APPOINTMENTS
              </h2>
              Rs.
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                PROCEED
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md={2}></Col>
      
    </Row>

    // <Row>
    //   {cartItems.map((item) => (
    //       <h1 key={item.product}> {item.name}</h1>
    //    ))} 
    // </Row>
  );
};

export default CartScreen;
