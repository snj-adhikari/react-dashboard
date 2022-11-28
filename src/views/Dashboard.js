
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  regionWiseStatistic,
  popularityOnGoogle,
  searchWordTermTrend
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md={12}> 
             <h2 class="text-center">Google Search</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-globe text-warning" /> */}
                        <img src="https://beamafilm.com/apple-touch-icon-120x120.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Searched Movie</p>
                        <CardTitle tag="p">650</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Data Processed over 40 
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-money-coins text-success" /> */}
                        <img src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Netflix (ANZ)</p>
                        <CardTitle tag="p">130</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> 55% acuracy
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-vector text-danger" /> */}
                        <img src="https://www.kanopy.com/sites/all/themes/ksui2018/favicon/android-chrome-192x192.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Kanopy</p>
                        <CardTitle tag="p">210</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> acuracy 60 % 
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-favourite-28 text-primary" /> */}
                        <img src="https://www.stan.com.au/favicon.ico"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Stan </p>
                        <CardTitle tag="p">40</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt " /> Accuracy 80%
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-globe text-warning" /> */}
                        <img src="https://m.media-amazon.com/images/G/01/digital/video/DVUI/favicons/apple-touch-icon-57x57._CB527404565_.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Prime Video</p>
                        <CardTitle tag="p">250</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Accuracy 20%
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-money-coins text-success" /> */}
                        <img src="https://www.hayu.com/assets/images/icons/favicon-32x32.v1.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Hayu</p>
                        <CardTitle tag="p">20</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> 33% acuracy
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-vector text-danger" /> */}
                        <img src="https://resources.streamotion.com.au/production/binge/web/favicons/favicon-32x32.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Binge</p>
                        <CardTitle tag="p">30</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> acuracy 30 % 
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-favourite-28 text-primary" /> */}
                        <img src="https://www.fetchtv.com.au/images/favicons/fetch/apple-touch-icon-57x57.png"/>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Fetch </p>
                        <CardTitle tag="p">22</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt " /> Accuracy 10%
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
            <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5"> Search Term Trends</CardTitle>
                  <p className="card-category">Keyword Expansion for Future Updates</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={searchWordTermTrend.data}
                    options={searchWordTermTrend.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Free Films{"  "}
                    <i className="fa fa-circle text-warning" /> Watch Online {" "}
                    <i className="fa fa-circle text-danger" /> E-Resources {" "}
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Google Trend (Knowledge graph)
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Regional Statistics</CardTitle>
                  <p className="card-category">Keyword Search : "Free  Movies"</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={regionWiseStatistic.data}
                    options={regionWiseStatistic.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                  
                    <i className="fa fa-circle text-danger" /> NSW{" "}
                    <i className="fa fa-circle text-warning" /> Victoria {" "}
                    <i className="fa fa-circle text-primary" /> South Australia{" "} <br/>
                    
                    <i className="fa fa-circle text-gray" /> Tasmania {" "}
                    <i className="fa fa-circle text-success" /> ACT {" "}
                  </div>
                  <hr />
                  <div className="stats">
                    {/* <i className="fa fa-calendar" /> Search Ration 2018 ( Google Trend) */}
                  </div>
                </CardFooter>
              </Card>
            </Col>
          
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Google ANZ Popularity</CardTitle>
                  <p className="card-category">2020</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={popularityOnGoogle.data}
                    options={popularityOnGoogle.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle text-primary" /> Netflix {"  "}
                    <i className="fa fa-circle text-danger" /> Stan{" "}
                    <i className="fa fa-circle text-success" /> Prime Video{" "}
                    <i className="fa fa-circle text-inverse" /> Kanopy{" "}
                    <i className="fa fa-circle text-warning" /> Beamafilm
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> 2020
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default Dashboard;
