import React, {useState} from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  min-width: 70vw;
  color: black;
`;

function Table(props) {
  const findCategory = name => {
    let catName = [];

    props.countryRestaurants.items.filter(shop => {
      if (shop.name == name) {
        if (shop.category) {
          shop.category.map(cat => {
            catName.push(`${cat}, `);
          });
        } else {
          catName.push('NA');
        }
      }
    });
    return catName.map(kn => kn);
  };

  return (
    <StyledTable id="result-table" aria-label="Table of Restraunts">
      <tbody aria-label="Restraunt Table Body">
        <tr aria-label="Restraunt Table Header Row">
          <th id="th1" aria-label="Restraunt Header">
            Name
          </th>
          <th id="th2" aria-label="Restraunt Address">
            Address
          </th>
          <th id="th3" aria-label="Restraunt Price">
            Price
          </th>
          <th id="th4" aria-label="Cuisine Type">
            Cuisine Type
          </th>
        </tr>
        {props.restaurants &&
          props.restaurants.map((item, i) => (
            <React.Fragment key={item.id}>
              <tr style={{minWidth: '50%'}} aria-label={`listing ${i}`}>
                <td aria-label="restraunt" aria-labelledby="th1">
                  {item.name}{' '}
                </td>
                <td aria-label="address" aria-labelledby="th2">
                  {item.address}{' '}
                </td>
                <td aria-label="price" aria-labelledby="th3">
                  {item.price} out of 5
                </td>
                <td aria-label="cuisine" aria-labelledby="th4">
                  {props.countryRestaurants.items ? (
                    findCategory(item.name)
                  ) : (
                    <div>NA</div>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
