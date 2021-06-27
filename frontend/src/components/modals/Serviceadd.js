import React from 'react';
import {Modal,Button,Form} from "react-bootstrap"
const Serviceadd =({show,onHide}) =>{
    return(
        <Modal.Dialog
            show ={show}
            onHide = {onHide}
            size ="lg"
            centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить услугу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder={"Введите название услуги"}/>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
            <Button variant="outline-success" onClick={onHide} >Добавить</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
};
export default Serviceadd;