import infnet from "../img/infnet.jpeg";
import {
  GlobalStyle,
  MainCard,
  CardImgContainer,
  CardImg,
  CardText,
  CardIcons,
  CardTable,
  Table,
  TableHeader,
  TableCell,
} from "./styles.jsx";

import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function BasicExample() {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

export default BasicExample;
