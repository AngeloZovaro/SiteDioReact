import React from "react";
import { Button } from "../Button";
import { Container, Row, Column, Wrapper, BuscarInputContainer, Menu, MenuRight, UserPicture, Input  } from "./styles";
import logo from "../../assets/Logodio.png"
import ft from "../../assets/file.png";
import { useNavigate } from 'react-router-dom';

export default function Header({autenticado}) {

    return (
        <Wrapper>
            <Container>
                <Row>
                <UserPicture src={logo}></UserPicture>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}

                
                </Row>
                <Row>
                {autenticado ? (
                    <UserPicture src={ft}></UserPicture>

                    ) :                         <>
                    <MenuRight href="#" >Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </>}

                </Row>
            </Container>
        </Wrapper>
    )

}
export { Header }