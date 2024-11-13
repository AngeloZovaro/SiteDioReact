
import React from 'react';
import {Link} from "react-router-dom"
import bannerImage from "../../assets/banner-home.png"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"

import { useNavigate } from 'react-router-dom';

import {Container, TextContent, Title, TitlehighLight } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSingIn= () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitlehighLight>
                        Implemente <br/>
                    </TitlehighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSingIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="imagem principal" />
            </div>  
        </Container>
    </>)
}

export {Home};