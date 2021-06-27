import {Col,Card,Image, Button} from 'react-bootstrap';
import image1 from '../medical-icon.png';
import rub from '../515328.png';
const ServiceItem = ({service}) =>{
    return(
      <Col md={4} className={"mt-3"}>
          <Card style={{width:150, cursor:'pointer'}} border={"light"}>
              <Image width={150} height={150} src={image1} ></Image>
              <div className="mt-1 d-flex  align-items-center" >
                  <div>{service.price}</div>
                  <Image width={10} height={10} src={rub}></Image>
              </div>
              <div>{service.type}</div>
             <Button>Записаться</Button>
          </Card>
      </Col>
    );
};
export default ServiceItem;