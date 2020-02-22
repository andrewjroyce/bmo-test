import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Table from "./Table";

const StyledInput = styled.input`
  height: 90px;
  width: 80%;
  color: white;
  border: 5px solid #bf3211;
  background-color: black;
  font-size: 30px;
  padding: 5px;
  ::placeholder {
    color: #cfba58;
  }
`;

const StyledButton = styled.button`
  background-color: #bf3211;
  color: #f0efd1;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  height: 110px;
`;

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 10px 30px;
`;

const AppWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 1fr auto 5fr;
  background-color: #f0efd1;
`;
const AppHeader = styled.header`
  min-height: 20vh;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #f9f8cc;
  background-color: #323310;
  font-size: 38px;
`;

function App() {
  const [city, setCity] = useState("Toronto");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => getOpen(city), []);

  const getOpen = city => {
    axios({
      method: "get",
      url: `https://opentable.herokuapp.com/api/restaurants?city=${city}`
    }).then(response => {
      return setRestaurants(response.data.restaurants);
    });
  };

  return (
    <AppWrapper>
      <AppHeader>Opentables available in {city}</AppHeader>
      <BodyWrapper>
        <StyledInput
          aria-label="Input for city"
          type="text"
          onChange={event => {
            setCity(event.target.value);
          }}
          placeholder="Enter Your City"
        />
        <StyledButton
          aria-label="Search Restaurants Button"
          onClick={() => getOpen(city)}
        >
          Get Restaurants
        </StyledButton>
      </BodyWrapper>
      {restaurants && <Table restaurants={restaurants} />}
    </AppWrapper>
  );
}

export default App;
