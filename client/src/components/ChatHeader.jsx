import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const ChatHeader = ({ user }) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])
    let navigate = useNavigate()
    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        navigate ('/')
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url? user.url: "../src/assets/alticon.png"} />
                </div>
                <h3 className="text-2xl font-mono">Orca {user.name} <a className="text-slate-50">🎧</a></h3>
            </div>
            <i className="log-out-icon w-20 h-20" onClick={logout}><img src="../src/assets/logout.png"/></i>
        </div>
    )
}

export default ChatHeader