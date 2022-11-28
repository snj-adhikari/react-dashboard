
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Button,
  Form,
  Input,
} from "reactstrap";

class Prospect extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="text-center">LinkedIn Prospect </CardTitle>
                  <Form>
                  <Row>
                      <Col md={5}>
                        <FormGroup>
                            <label>Title</label>
                            <Input
                            defaultValue="Librarian"
                            placeholder="Type in Title "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={5}>
                        <label> Location</label>
                        <Input
                            defaultValue="Sydney"
                            placeholder="Type In Location"
                            type="text"
                          />
                      </Col>
                      <Col md={2}>
                            <label> &nbsp;</label>
                            <div>
                            <Button className="btn btn-danger m-0"  color="danger" value="Search"> Search</Button>

                            </div>
                      </Col>
                  </Row>
                </Form>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Organization</th>
                        
                        <th className="text-left">LinkedIN Url</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tara Klein</td>
                        <td>City of Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/tara-klein-993b8a58</td>
                      </tr>
                      <tr>
                        <td>Sunny South</td>
                        <td>Sydney Secondary College</td>
                        <td className="text-left">https://au.linkedin.com/in/sunny-south-9864252a</td>
                      </tr>
                      <tr>
                        <td>Heather Davis</td>
                        <td>City of Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/heather-davis-5b47a28</td>
                      </tr>
                      <tr>
                        <td>Fiona Simpson</td>
                        <td>Historical Services Library</td>
                        <td className="text-left">https://au.linkedin.com/in/fiona-simpson-89a7a9116</td>
                      </tr>
                      <tr>
                        <td>Richard Neville</td>
                        <td> State Library of NSW</td>
                        <td className="text-left">https://au.linkedin.com/in/richard-neville-b71b9224</td>
                      </tr>
                      <tr>
                        <td> Kim Sherwin</td>
                        <td>City of Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/kim-sherwin-04214566</td>
                      </tr>
                      <tr>
                        <td>Rebecca Allan</td>
                        <td>City of Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/rebecca-allan-5246b2179</td>
                      </tr>
                      <tr>
                        <td> Todd Hillsley</td>
                        <td> Western Sydney University</td>
                        <td className="text-left"> https://au.linkedin.com/in/todd-hillsley-93117966</td>
                      </tr>
                      
                      <tr>
                        <td> Lani Oram</td>
                        <td> Inner West Tool Library Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/lani-oram-7a0487183</td>
                      </tr>
                      <tr>
                        <td> Marion Silk</td>
                        <td> Inner West Tool Library Sydney</td>
                        <td className="text-left">https://au.linkedin.com/in/lani-oram-7a0487183</td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </div>
      </>
    );
  }
}

export default Prospect;
