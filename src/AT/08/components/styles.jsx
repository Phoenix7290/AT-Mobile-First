import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const size = {
  md: "768px",
};

export const MainCard = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  border: 3px solid black;
  border-radius: 2%;
  margin: 3vw;

  @media (min-width: ${size.md}) {
    flex-flow: row wrap;
  }
`;

export const CardImgContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${size.md}) {
    width: 40%;
    border: none;
    border: none;
    height: 50vh;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
`;

export const CardImg = styled.img`
  width: 50vw;
  height: auto;

  @media (min-width: ${size.md}) {
    max-width: 40vh;
    height: auto;
  }
`;

export const CardText = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 3px solid black;
  padding: 5% 0;

  @media (min-width: ${size.md}) {
    width: 40%;
    border: none;
    height: 50vh;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5% 0;
  border-bottom: 3px solid black;

  @media (min-width: ${size.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    gap: 2vh;
    width: 20%;
    border: none;
    padding: 0;
    height: 50vh;
    border-bottom: 3px solid black;
  }
`;

export const CardTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 5% 0;

  @media (min-width: ${size.md}) {
    width: 50%;
    border: none;
  }
`;

export const Table = styled.table`
  width: 40vw;
  border-collapse: collapse;
  border: 2px solid black;
`;

export const TableHeader = styled.th`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`;

export const TableCell = styled.td`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`;
