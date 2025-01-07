import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPlanetById } from "../API/PlanetAPI";
import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { sentenceCase } from "change-case";

const PlanetViewer = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  // fetch planet data by ID
  useEffect(() => {
    GetPlanetById(id).then((res) => {
      setPlanet(res.data.result);
    });
  }, [id]);

  return (
    <>
      {planet ? (
        <Container className="my-4">
          <Row>
            {/* Left Column - Planet Details */}
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {planet.properties.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {sentenceCase(planet.properties.climate)}
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Diameter: </strong>
                        {planet.properties.diameter}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Gravity: </strong>
                        {planet.properties.gravity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Population: </strong>
                        {sentenceCase(planet.properties.population)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Terrain: </strong>
                        {sentenceCase(planet.properties.terrain)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Card.Footer className="bg-white">
                    <Card.Link>Add link to planet here</Card.Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column - additional Details */}
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Rotation Period: </strong>
                        {sentenceCase(planet.properties.rotation_period)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Orbital Period: </strong>
                        {planet.properties.orbital_period}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>surface_water: </strong>
                        {planet.properties.surface_water}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        // Loading Spinner
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" />
        </Container>
      )}
    </>
  );
};

export default PlanetViewer;
