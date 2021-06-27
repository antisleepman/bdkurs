import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button,Form} from "react-bootstrap"


const TypeModal =({show,onHide}) =>{
    return(
        <Modal
            show ={show}
            onHide = {onHide}
            size ="lg"
            centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить отделение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder={"Введите название отделения"}/>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
            <Button variant="outline-success" onClick={onHide} >Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};
export default TypeModal;