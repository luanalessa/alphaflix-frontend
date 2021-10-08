import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Informe seu usuário!'),
    password: Yup.string()
        .required('Informe sua senha!'),
});
