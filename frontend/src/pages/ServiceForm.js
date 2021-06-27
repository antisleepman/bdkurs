import React from 'react';
import { Container,Form,Card,Row,Col } from 'react-bootstrap';
const ServiceForm = () =>{
    return(
        <Container className="d-flex justify-content-center align-items-center"style={{height:window.innerHeight - 500}}>
            <Card style={{width:600}} className="p-5">
            <h2 className="m-auto">Предварительная запись</h2>
            <Form className="d-flex flex-column">
            <Row>
            <Col>
            <Form.Control 
           className="mt-3"
           placeholder="ФИО">
           </Form.Control>
           </Col>
            <Col><Form.Control 
           className="mt-3"
           placeholder="Телефон">
           </Form.Control>
           </Col>
            </Row>
            <Form.Label>Выберите отделение</Form.Label>
            <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
            <Row>
            <Col>
            <input className="form-control date-picker valid" ></input>
           </Col>
            <Col><Form.Control 
           className="mt-3"
           placeholder="Телефон">
           </Form.Control>
           </Col>
            </Row>
            </Form>
            </Card>
            
        </Container>
    );
};
export default ServiceForm;