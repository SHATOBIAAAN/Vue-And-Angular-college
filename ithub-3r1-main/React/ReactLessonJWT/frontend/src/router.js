import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom'
import Layout from './layout'
import HomePage from './pages/home-page'
import UsersPage from './pages/users-page'
import AboutPage from './pages/about-page'
import LoginPage from './pages/login-page'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { verifyAction } from './store/asyncActions/auth.actions'


const AuthRoute = ({ component }) => {
    const dispatch = useDispatch()

    const path = useLocation()

    useEffect(() => {
        dispatch(verifyAction())
    }, [dispatch, path])

    const isAuth = useSelector(store => store.auth.isAuth)
    if (isAuth) {
        return component
    } else {
        return <Navigate to={'/login'} />
    }

}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AuthRoute component={<AboutPage />}/> },
            { path: 'users', element: <AuthRoute component={<UsersPage />} /> },
            { path: 'login', element: <LoginPage /> },
        ]
    }
])