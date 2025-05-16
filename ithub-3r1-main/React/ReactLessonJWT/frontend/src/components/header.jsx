import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../store/slice/authSlice"

const Header = () => {

    const {
        isAuth,
        userName
    } = useSelector(store => store.auth)

    const dispatch = useDispatch()

    const navs = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        { id: 3, title: 'Users', path: '/users' },
    ]


    const onLogout = () => {
        dispatch(logout())
    }


    return (
        <div className="header">
            <div className="logo"></div>
            <ul className="menu">
                {navs.map(el =>
                    <Link key={el.id} to={el.path}>
                        <li >{el.title}</li>
                    </Link>
                )}
            </ul>
            <div className="profile">
                {isAuth && <p>{userName}</p>}
                {isAuth ? <button onClick={onLogout}>Logout</button> : <Link to={'/login'}><button>Login</button></Link>}
            </div>
        </div>
    )
}


export default Header