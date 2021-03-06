import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 60%;
  margin: 0 auto;
  padding: 1%;

  @media (min-width: 400px) {
    width: 98%;
  }
`;

export const Info = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #000;
`;
