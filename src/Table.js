import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  min-width: 70vw;
  color: black;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: red;
    font-weight: bold;
  }
`;

const dollarFunction = rating => {
  switch (rating) {
    case 5:
      return "$$$$$";
    case 4:
      return "$$$$";
    case 3:
      return "$$$";
    case 2:
      return "$$";
    case 1:
      return "$";
    case 0:
      return null;
    default:
      return "N / A";
  }
};

function Table(props) {
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
            Phone
          </th>
        </tr>
        {props.restaurants &&
          props.restaurants.map((item, i) => (
            <React.Fragment key={item.id}>
              <tr style={{ minWidth: "50%" }} aria-label={`listing ${i}`}>
                <td aria-label="restraunt" aria-labelledby="th1">
                  <StyledLink
                    href={`http://www.opentable.com/single.aspx?rid=21307`}
                  >
                    {item.name}
                  </StyledLink>
                </td>
                <td aria-label="address" aria-labelledby="th2">
                  {item.address}
                </td>
                <td aria-label="price" aria-labelledby="th3">
                  {dollarFunction(item.price)}
                </td>
                <td aria-label="cuisine" aria-labelledby="th4">
                  {item.phone}
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
