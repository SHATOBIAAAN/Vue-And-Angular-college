import * as yup from 'yup'


export const validationSchema = yup.object({
    name: yup.string()
                .required('Введите имя')
                .min(3, 'Минимум 3 символа'),
    password: yup.string()
                .required('Ведите пароль')
                .matches(/\w{8,}[!@#$%^&*()]+/,'Длина 8 символов и в конце любой спец. символ'),    
    secondPassword: yup.string()
                .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
                .required('Повторите пароль'),
    birthdate: yup.date()
                    .max(new Date(), 'Дата должна быть ранее текущей')
})