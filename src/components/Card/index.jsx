import React from 'react'
import { fitThumbsUp } from "react-icons/fi";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles';
import ft from "../../assets/file.png";
import logo from "../../assets/bgdio.png";
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={logo}/>
        <Content>
            <UserInfo>
                <UserPicture src={ft}/>
                
                <div>
                    <h4>Angelo Zovaro</h4>
                    <p>Há 2 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Estudando React e fazendo o site da Dio</h4>
                <p>Projeto feito durante o curso, acompanhando o video e codando...<strnog>Saiba mais</strnog></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #javaScript #React</h4>
                <p>
                    <fitThumbsUp /> 65
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }