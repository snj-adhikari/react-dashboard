
import React from "react";

import Footer from "components/Footer/Footer.js";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";


var ps;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
   
  }
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  componentDidUpdate(e) {
    
  }
  
  render() {
    return (
      <div className="login-page wrapper">
        <div className="login-panel" ref={this.mainPanel}>
            <Row className="justify-content-center">
                <Col md="6">
                    <Card className="login-card">
                        <CardHeader>
                            <CardTitle className="text-center" tag="h5">Login</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row className="justify-content-center">
                                    <Col  md="8">
                                        <FormGroup>
                                            <label htmlFor="Email">
                                            Email address
                                            </label>
                                            <Input placeholder="Email" type="email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="Password">
                                                Password
                                            </label>
                                            <Input placeholder="Email" type="password" />
                                        </FormGroup>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                                >
                                                Login
                                                </Button>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                               
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
           
            
          
        </div>
        
      </div>
    );
  }
}

export default Login;
