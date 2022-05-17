import { CloseButton } from "react-bootstrap"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { dataSelector } from "../../store/user/user.selectors"

export function Sidebar ({ showBar, closeBar }) {
    const username = useSelector(dataSelector)
    return (
        <ProfileBar className="bg-gradient" showBar={showBar}>
            <CloseButton onClick={closeBar} />
            <h2 className="text-center text-primary mt-3">{username.name}</h2>           
        </ProfileBar>
    )
}

const ProfileBar = styled.header`
    position: fixed;
    top:40px;
    left:0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: #333;
    margin-left: -100%;
    transition: all .3s linear;
    ${(pros) => pros.showBar && `
    margin-left: 0;
    `}
`