import React, { useContext } from 'react';
import {Row,Card} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
const BranchBar = observer(() =>{
    const {service} = useContext(Context)
    return(
       <Row className="d-flex">
           {service.branchs.map(branch =>
           <Card
           style={{cursor:'pointer'}}
            key={branch.id}
            className="p-3"
            onClick={() => service.setSelectedBranch(branch)}
            border={branch.id === service.selectedBranch.id ? 'danger' : 'light'}>
               {branch.name}
           </Card> )}
       </Row>
    );
});
export default BranchBar;