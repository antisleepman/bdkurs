import React, {useContext, useState}  from 'react';
import { Container, Form } from 'react-bootstrap';
import { NavLink,useLocation } from 'react-router-dom';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import  Row  from 'react-bootstrap/Row';
import {observer} from "mobx-react-lite";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { login, registration } from '../http/userAPI';
import { Context } from '..';
const Auth =observer( () =>{
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const click = async () =>{
      try{
        let data;
        if (isLogin){
            data = await login(login,password)
        }else{
            data = await registration(login,password)
        }
        user.setUser(user)
        user.setIsAuth(true)
      }catch(e){
          alert(e.response.data.message)
      }
      
       
    }
    return(
   <Container
   className="d-flex justify-content-center align-items-center"style={{height:window.innerHeight - 500}}>
       <Card style={{width:600}} className="p-5">
           <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация" }</h2>
       <Form className="d-flex flex-column">
           <Form.Control 
           className="mt-3"
           placeholder="введите логин"
           value={login}
           onChange={e=> setLogin(e.target.value)}>    
           </Form.Control>
           
           <Form.Control 
           className="mt-3"
           placeholder="введите пароль"
           value={password}
           onChange={e=> setPassword(e.target.value)}
           type="password">
           </Form.Control>
           <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 " >
              { isLogin ?
               <div>
                   Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
               </div>
               :
               <div>
                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
               </div>
              }
           <Button className="mt-3 align-self-end" variant={"outline-success"} onClick={click} >
               {isLogin ? 'Войти' : "Регистрация"}
           </Button>
           </Row>
          

       </Form>
       </Card>
   </Container>
        
    );
});
export default Auth;