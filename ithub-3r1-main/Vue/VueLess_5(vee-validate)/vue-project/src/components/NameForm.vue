<template>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
        <div class="form_elem">
            <label>Full name</label>
            <Field name="name" v-model="form.name"/>

            <!-- Пример стилизации инпута если есть ошибка -->
            <!-- 
            <Field name="name" v-model="form.name" v-slot="{field, errors}">
                <input v-bind="field" :class="{'error_input': errors.length }"/>
            </Field> -->
            
            <ErrorMessage name="name" class="error_text"/>
        </div>
        <div class="form_elem">
            <label>Password</label>
            <Field name="password" v-model="form.password"/>
            <ErrorMessage name="password" class="error_text"/>
        </div>
        <div class="form_elem">
            <label>Second Password</label>
            <Field name="secondPassword" v-model="form.secondPassword"/>
            <ErrorMessage name="secondPassword" class="error_text"/>
        </div>
        <div class="form_elem">
            <label>Birthdate</label>
            <Field name="birthdate" type="date" v-model="form.birthdate"/>
            <ErrorMessage name="birthdate" class="error_text"/>
        </div>
        <div class="form_elem">
            <button type="submit">Отправить</button>
        </div>
    </Form>
</template>
<script>
import { validationSchema } from '@/validationRules';
import { ErrorMessage, Field, Form } from 'vee-validate';
export default{
    components: {Field, ErrorMessage, Form},
    data(){
        return {
            validationSchema,
            form: {
                name: '',
                password: '',
                secondPassword: '',
                birthdate: null
            }
        }
    },
    methods: {
        onSubmit(e){        
            console.log(this.form)
        }
    }
}
</script>

<style>
.form_elem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 300px;
    gap: 16px;
    border: 1px solid black;
    border-radius: 16px;
    padding: 10px;
}
.error_input{
    border: 1px solid red;
    border-radius: 4px;
}
.error_input:focus{
    border: 1px solid red;
    border-radius: 4px;
}
.error_text{
    color: red;
}
</style>