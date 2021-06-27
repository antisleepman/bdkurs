import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BranchBar from '../components/BranchBar'
import ServiceList from '../components/ServiceList';
const Home = () =>{
    return(
       <Container>
           <Row className={"mt-2"}>
               <Col md={3}>
                   <TypeBar></TypeBar>
               </Col>
               <Col md={9}>
                   <BranchBar></BranchBar>
                   <ServiceList></ServiceList>
               </Col>
           </Row>
       </Container>
    );
};
export default Home;