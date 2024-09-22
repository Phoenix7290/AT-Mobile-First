import styled from "styled-components";
import infnet from "../img/infnet.jpeg";

import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const MainCard = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  border: 3px solid black;
  border-radius: 2%;
  margin: 3vw;
`;

const CardImgContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  width: 50vw;
  height: auto;
`;

const CardText = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 3px solid black;
  padding: 5% 0;
`;

const CardIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5% 0;
  border-bottom: 3px solid black;
`;

const CardTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 5% 0;
`;

const Table = styled.table`
  width: 40vw;
  border-collapse: collapse;
  border: 2px solid black;
`;

const TableHeader = styled.th`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`;

const TableCell = styled.td`
  text-align: center;
  border: 2px solid black;
  padding: 1%;
`;

function BasicExample() {
  return (
    <MainCard>
      <CardImgContainer>
        <CardImg src={infnet} alt="Image" />
      </CardImgContainer>
      <CardText>
        <h1>Nome Completo</h1>
        <p>Data de Nascimento</p>
        <p>Setor</p>
        <p>Cargo</p>
      </CardText>
      <CardIcons>
        <IoMdCall style={{ fontSize: "2rem" }} />
        <IoMail style={{ fontSize: "2rem" }} />
        <FaMapMarkerAlt style={{ fontSize: "2rem" }} />
      </CardIcons>
      <CardTable>
        <Table>
          <thead>
            <tr>
              <TableHeader>Estado</TableHeader>
              <TableHeader>Tarefas</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>
                <IoIosCheckboxOutline />
              </TableCell>
              <TableCell>Tarefa 1</TableCell>
            </tr>
            <tr>
              <TableCell>
                <MdCheckBoxOutlineBlank />
              </TableCell>
              <TableCell>Tarefa 2</TableCell>
            </tr>
            <tr>
              <TableCell>
                <MdCheckBoxOutlineBlank />
              </TableCell>
              <TableCell>Tarefa 3</TableCell>
            </tr>
          </tbody>
        </Table>
      </CardTable>
    </MainCard>
  );
}

export default BasicExample;
