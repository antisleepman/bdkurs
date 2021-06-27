import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from 'react-bootstrap/esm/NavLink';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/const';


const NavBar = observer (() =>{
    const {user} = useContext(Context)
    const history = useHistory()
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} href="/">Платная поликлиника</NavLink>
    {user.isAuth ?
    <Nav className="ml-auto" style={{color:'white'}}>
    <Button 
    variant={"outline-light"}
    onClick={() => history.push(ADMIN_ROUTE)}
    >Админ панель
    </Button>
   <Button
   variant={"outline-light"} className={"ml-2"}
   onClick={() => history.push(LOGIN_ROUTE)} >
       Выйти
       </Button>
    </Nav>
    :
    <Nav className="ml-auto" style={{color:'white'}}>
   <Button variant={"outline-light"} onClick={()=>history.push(LOGIN_ROUTE)} >Авторизация</Button>
    </Nav>
}
            </Container>
   
  </Navbar>
    );
});

export default NavBar;