import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Table from './Table';

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

function App() {
  const [city, setCity] = useState('Toronto');
  const [restaurants, setRestaurants] = useState([]);
  const [countryRestaurants, setCountryRestaurants] = useState([]);

  useEffect(() => getOpen(city), []);
  useEffect(() => getAll(), []);

  const getOpen = city => {
    axios({
      method: 'get',
      url: `https://opentable.herokuapp.com/api/restaurants?city=${city}`
    }).then(response => {
      return setRestaurants(response.data.restaurants);
    });
  };

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `https://platform.otqa.com/sync/directory?country=CA`;

  const getAll = () => {
    fetch(proxyUrl + targetUrl, {
      method: 'GET',
      headers: {
        Authorization: 'bearer 27ae8298-b654-40ce-aa41-856fbec436c8',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(response => setCountryRestaurants(response));
  };

  return (
    <div className="App">
      <header className="App-header">Opentables available in {city}</header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '5fr 1fr',
          margin: '10px 30px'
        }}
      >
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
      </div>
      {restaurants && (
        <Table
          restaurants={restaurants}
          countryRestaurants={countryRestaurants}
        />
      )}
    </div>
  );
}

export default App;
