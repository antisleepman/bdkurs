import React, { useContext } from 'react';
import {Modal,Button,Form, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
const CreateService =({show,onHide}) =>{
    const {service} = useContext(Context)
    return(
        <Modal
            show ={show}
            onHide = {onHide}
            size ="lg"
            centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить услугу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Dropdown>
                <Dropdown.Toggle>Выберите тип услуги</Dropdown.Toggle>
                <Dropdown.Menu>
                    {service.types.map(type=> <Dropdown.Item key={type.id} >{type.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3" >
                <Dropdown.Toggle>Выберите отделение</Dropdown.Toggle>
                <Dropdown.Menu>
                    {service.branchs.map(type=> <Dropdown.Item key={type.id} >{type.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className="mt-3" placeholder="Цена"/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
            <Button variant="outline-success" onClick={onHide} >Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};
export default CreateService;