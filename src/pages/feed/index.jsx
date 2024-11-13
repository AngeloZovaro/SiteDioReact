
import React from 'react';
import {Link} from "react-router-dom"
import bannerImage from "../../assets/banner-home.png"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import ft from "../../assets/file.png";

import {Container, TitlehighLight, Title, Column } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado = {true}/>
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            
            </Column>
            <Column flex={1}>
                <Title>Ranking top 5 da semana</Title>
                <UserInfo percentual={95} nome="Angelo Zovaro" image={ft}/>
                <UserInfo percentual={77} nome="Angelo Zovaro" image={ft}/>
                <UserInfo percentual={55} nome="Angelo Zovaro" image={ft}/>
                <UserInfo percentual={22} nome="Angelo Zovaro" image={ft}/>
                <UserInfo percentual={4} nome="Angelo Zovaro" image={ft}/>
            </Column>
        </Container>
    </>)
}

export {Feed};