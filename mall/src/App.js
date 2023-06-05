import logo from './logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg.png'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=> { navigate('/') }}>Home</Nav.Link> 
          {/* navigate(-1) = prev page */}
          <Nav.Link onClick={()=> { navigate('/detail') }}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i) => {
                  return (
                    <Card shoes={a} i={i}></Card>
                  )
                })
              }
            </div>
          </div>
          </>
        } />  
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>  

        {/* Nested Routes */}
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>member</div>}/>
          <Route path="location" element={<div>member</div>}/>
        </Route>

        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>first order promotion</p>}></Route>
          <Route path="two" element={<p>birthday coupon</p>}></Route>
        </Route>
        
        <Route path="*" element={<div>Not a page</div>}/>
      </Routes> 

      
    </div>
  );
}

function EventPage(){
  return (
    <div>
      <h4>Today's event</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function About() {
  return(
    <div>
      <h4>company information</h4>
      {/* Outlet shows the element of nested routes like member(51) or location(52) */}
      <Outlet></Outlet>
    </div>
  )
}


function Card(props) {
  return (
    <div className="col-md-4">
      {/* To use images in public folder 
        <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 
      */}
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) + ".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
