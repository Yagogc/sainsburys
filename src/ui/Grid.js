import styled from "styled-components";

export const GridContainer = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: center;
  justify-items: center;
`;

export const GridItem = styled.img`
  width: 100%;
  height: 150px;
  color: red;
  object-fit: cover;
  border: 2px solid ${props => (props.isSelected ? "red" : "#8897a2")}
  transform: scale3D(0.9, 0.9, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    transform: scale3D(1, 1, 1);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
