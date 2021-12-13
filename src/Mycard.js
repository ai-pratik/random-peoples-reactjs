import react from "react"
import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Row,Col,
    Button,
  } from "reactstrap";
const Mycard = ({details,details1}) => {
    return (
        
        <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
        ><Row>
            <CardBody align="center">
            
                    <span className="container-fluid">
                    <img  height="150px" width="150px" className=" rounded-circle img-thumbnail border-danger" src={details.picture?.large}></img>
                <Col className="md-5"> <CardTitle> <h1>{details.name?.first} {details.name?.last} </h1>
                </CardTitle>
                <CardText>
                    {details.phone}
                </CardText>
                <CardText>
                    {details.email}
                </CardText>
                <CardText>
                    {details.username?.username}
                </CardText>
                </Col>
                </span>
                

            </CardBody>
            </Row>
        </Card>)
}
export default Mycard;
