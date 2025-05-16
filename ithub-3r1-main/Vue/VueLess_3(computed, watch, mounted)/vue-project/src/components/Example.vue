(computed)
сво-во computed позволяет вынести вычисления из шаблона компнента, формурия геттер, 
который кеширует return и не формирует новый результат в случае, если используемые
сво-ва меняться не будут

(watch)
watch позволяет следить за моделькой и выполнять побочный код. В имени метода важно указать имя переменной, за которой
вы хотите следить. Если необходимо следить за несколькими переменными - используйте метод computed в качестве имени метода watch.    
Также внутри метода мы можем получать старое и новое значение в качестве аргумента метода (например, для осуществления дополнительных проверок в коде метода)

(mounted)
Метод mounted позволяет выполнить побочный код в момент монтирования компонента

<template>
    <!-- Пример computed #1 -->
    <div>
        <h1>{{ getMessage }}</h1>
        <h1>{{ getString }}</h1>
    </div>
    <!-- Пример computed #2  -->
    <div>
        <h1>{{ fullName }}</h1>
        <input v-model="form.name"/>
        <input v-model="form.lastname"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'Hello world!',
            number: 5,
            form: {
                name: 'Alex',
                lastname: 'Willyam'
            }
        }
    }, 
    computed: {
        getMessage(){
            return this.message
        },
        getString(){
            return new Array(this.number).fill(null).map(() => 'word').join(' ')
        },
        fullName(){
            return this.form.name + ' ' + this.form.lastname
        },
        fullnameWatch(){
            return [this.form.name, this.form.lastname]
        }
    },
    watch: {
        // Слежение за переменной number
        number(){
            console.log('number is changed')
        },     
        // Слежение за переменной lastname (если это часть объекта - используем кавычки)
        // Внутри метода мы также можем получить новое и старое значение указанной зависимости (lastname)
        'form.lastname'(newValue, oldValue){
            console.log('lastname is changed')
            console.log(newValue, oldValue)
        },
        // Слежение за computed fullnameWatch
        fullnameWatch(){
            console.log('form is changed!')
        }
    },
    mounted(){
        console.log('mounted!')
        this.form.name = 'Tigran'
    }
}
</script>


<style scoped>
</style>