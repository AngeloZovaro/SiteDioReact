import React from 'react'
import {Container, NameText, Progess, UserPicture} from "./styles"
 

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progess percentual={percentual}/>
        </div>
    </Container>
  )
}

export { UserInfo }
