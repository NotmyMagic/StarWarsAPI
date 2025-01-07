import React, { useEffect, useState } from "react";
import { GetPlanets } from "../API/PlanetAPI";
import { Card, Stack, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlanetComponent = ({ searchQuery }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    GetPlanets().then((response) => {
      const planets = response.data.results;
      setPlanets(planets);
      setFilteredPlanets(planets);
    });
  }, []);

  // filter planets based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = planets.filter((planets) =>
        planets.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(planets);
    }
  }, [searchQuery, planets]);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map((planet, index) => (
            <Card key={index} className="shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">{planet.name}</Card.Title>
                  <Card.Text className="text-muted">
                    Planet ID: {planet.uid}
                  </Card.Text>
                </div>
                <Link
                  to={`/ViewPlanet/${planet.uid}`}
                  className="btn btn-outline-primary"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="grow" />
          </Container>
        )}
      </Stack>
    </Container>
  );
};

export default PlanetComponent;
