import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/user.service";
import { userLogout } from "../../store/user/user.action";
import { dataSelector } from "../../store/user/user.selectors";
import { HeaderItens } from "./headeritem";

const menuItems =[
    {
        to: '/portaldeacesso/servicos',
        text: 'Serviços',
        userTypes:[1, 2]
    },
    {
        to: '/portaldeacesso/inf',
        text: 'Informações',
        userTypes: [1]
    }
]

export function HeaderLogIn ({ openSide }) {
    const { type } = useSelector(dataSelector)
    const username = useSelector(dataSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const clickLogout = () => {
        logoutUser()
        dispatch(userLogout())
        navigate('/')
    }
    return (
        <Nav
        className="bg-dark bg-gradient ml-auto"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link onClick={openSide}>{username.name}</Nav.Link>
            </Nav.Item>
            {menuItems.filter(item => item.userTypes.includes(type)).map((item, index) => (
              <HeaderItens key={index} item={item} />
            ) )}
            <Nav.Item className="ms-auto">
                <Nav.Link onClick={clickLogout}>
                Sair
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

