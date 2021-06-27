import React , {useState} from 'react';
import { Container,Button } from 'react-bootstrap';
import CreateService from '../components/modals/CreateService';
import TypeModal from '../components/modals/TypeModal';
import View from '../components/modals/View';

const Admin = () =>{
    const [ServiceVisible,SetServiceVisible] = useState(false)
    const [TypeVisible,SetTypeVisible] = useState(false)
    const [ViewVisible,SetViewVisible] = useState(false)
   
    return(
        <Container className="d-flex flex-column" >
            <Button 
            className="mt-4 p-2" 
            onClick={() => SetTypeVisible(true)}
            >Добавить отделение
            </Button>
            <Button 
            className="mt-4 p-2"
            onClick={() => SetServiceVisible(true)}
            >Добавить услугу
            </Button>
            <Button
            className="mt-4 p-2"
            onClick={() => SetViewVisible(true)}
            >Посмотреть записи</Button>
            <CreateService show={ServiceVisible} onHide={()=> SetServiceVisible(false)} />
            <TypeModal show={TypeVisible} onHide={()=> SetTypeVisible(false)} />
            <View show={ViewVisible} onHide={()=> SetViewVisible(false)}/>
        </Container>
    );
};
export default Admin;