import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/productdata';

import About from './pages/About';
import Detail from './pages/Detail';

import { Routes, Route , Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Row , Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const Navigate = useNavigate()//페이지를 연동시킬 때 훅
  const [bests] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{Navigate('/')}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{Navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about/info')}}>Infomation</Nav.Link>
            <Nav.Link onClick={()=>{Navigate('about/loca')}}>location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Container>
            <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt = "visual_img" />
            <h2>Best 상품</h2>
            <Row>
              {
                bests.map((best,index) => {
                  return (
                    <Link to={'detail/${index}'}>
                      <Col>
                      <img src={best.image} style={{width:200}} />
                      <h4>{best.title}</h4>
                      <p>{best.desc}</p>
                      <p>{best.price}</p>
                      </Col>
                    </Link>
                  )
                })
              }
            </Row>
          </Container>
          }>

          </Route>
          <Route path='/' element={<div>Home</div>}></Route>
          <Route path='about' element={<About />}>
            <Route path='info' element={<div>Infomation</div>}/>
            <Route path='loca' element={<div>location</div>}/>
          </Route>
          <Route path='detail/:id' element={<Detail bests={bests} />} />
      </Routes>

    </div>
  );
}

export default App;
