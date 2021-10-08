import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { LoginSchema } from '../../services/validation'
import { login } from '../../services/controllers'

import * as S from './styles'
import Input from '../../components/Input'
import Button from '../../components/ Button'

const Login = () => 
{   
    const navigate = useHistory();

    const login = (data) => {
        api.post('http://localhost:8000/login', data)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data);
                navigate.push("home");
                return true
            }
            else return false;
        })
    }

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
                    onSubmit={ data => login(data)}>
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

                        <Button className="type-green" width="400px" >Entrar</Button>
                        <Button className="type-white">Registrar</Button>
                    </Form>
                </Formik>
            </S.Container>
        </S.BackGround>
    )
}

export default Login;