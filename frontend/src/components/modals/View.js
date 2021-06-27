import React from 'react';
import {Modal,Button,Form} from "react-bootstrap"
const View =({show,onHide}) =>{
    return(
        <Modal
            show ={show}
            onHide = {onHide}
            size ="lg"
            centered>
        <Modal.Header closeButton>
          <Modal.Title>Все записи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder={" "}/>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
            <Button variant="outline-success" onClick={onHide} >Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};
export default View;