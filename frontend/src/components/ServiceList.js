import React, { useContext } from 'react';
import {Row} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
import ServiceItem from './ServiceItem';
const ServiceList = observer(() =>{
    const {service} = useContext(Context)
    return(
       <Row className="d-flex">
           {service.services.map( service =>
           <ServiceItem key={service.id} service={service} ></ServiceItem>
          )}
       </Row>
    );
});
export default ServiceList;