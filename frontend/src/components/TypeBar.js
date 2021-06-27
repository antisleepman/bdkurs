import React, { useContext } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
const TypeBar = observer(() =>{
    const {service} = useContext(Context)
    return(
       <ListGroup>
           {service.types.map(type =>
             <ListGroupItem
             active={type.id === service.selectedType.id} 
             onClick={() => service.setSelectedType(type)} 
             key={type.id}>
                 {type.name}
             </ListGroupItem> )}
       </ListGroup>
    );
});
export default TypeBar;