import React from 'react'

import * as S from './styles'
import Input from '../../components/Input'
import Button from '../../components/ Button'

export default function Login(){
    return(
        <S.BackGround>
            <S.Container>
                <Input placeholder="Nome de usuário"/>
                <Input placeholder="Senha"/>
                <Button className="type-green" width="400px">Entrar</Button>
                <Button className="type-white">Registrar</Button>
            </S.Container>
        </S.BackGround>
    )
}