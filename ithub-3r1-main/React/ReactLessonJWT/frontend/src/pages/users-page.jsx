import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsersAction } from "../store/asyncActions/users.actions"

const UsersPage = () => {

    const dispatch = useDispatch()

    const userList = useSelector(store => store.users.userList)

    useEffect(() => {
        dispatch(getUsersAction())
    }, [])

    return (
        <div className="content">
            <div>
                <h1>Users page</h1>
                <ul>
                    {userList.map(user =>
                        <li key={user.id}>{user.username}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default UsersPage