
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { authAction, verifyAction } from '../store/asyncActions/auth.actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth)

    const navigation = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm()

    useEffect(() => {
        if (auth.token) {
            dispatch(verifyAction())
            navigation('/')
        }
    }, [auth])

    const onSubmit = (data) => {
        dispatch(authAction(data))
    }

    return (
        <div className="content">
            {(auth.loading) ? <p>Loading....</p> :
                <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
                    {auth.error && <p className='error_text'>{auth.error}</p>}
                    <label>
                        Login
                        <input {...register('username', { required: true })} />
                    </label>
                    <label>
                        Password
                        <input {...register('password', { required: true })} />
                    </label>
                    <input type='submit' />
                </form>
            }
        </div>
    )
}

export default LoginPage