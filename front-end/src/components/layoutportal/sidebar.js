import { CloseButton } from "react-bootstrap"
import styled from "styled-components"

export function Sidebar ({ showBar, closeBar }) {
    return (
        <ProfileBar className="bg-gradient" showBar={showBar}>
            <CloseButton onClick={closeBar} />
            <h2 className="text-center text-primary mt-3">Alexandre Afonso Silva</h2>           
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