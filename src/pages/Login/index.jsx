import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { LoginSchema } from '../../services/validation'

import * as S from './styles'
import Input from '../../components/Input'
import Button from '../../components/ Button'

export default function Login() {


    return (
        <S.BackGround>
            <S.Container>
            <S.Title>
                <label>Você está no AlphaFlix</label>
                <p>o melhor serviço inexistente de streaming do mundo</p>
            </S.Title>

                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={values => console.log(values)}>
                    <Form>
                        
                        <Field
                            id="username"
                            name="username"
                            placeholder="Usuário"
                            className="username"
                            as={Input} />
                        <ErrorMessage name="username" component="label" className="error"/>

                        <Field
                            id="password"
                            name="password"
                            placeholder="Senha"
                            isSecret="true" 
                            className="password"
                            as={Input} />
                        <ErrorMessage name="password" component="label" className="error"/>

                        <Button className="type-green" width="400px">Entrar</Button>
                        <Button className="type-white">Registrar</Button>
                    </Form>
                </Formik>
            </S.Container>
        </S.BackGround>
    )
}