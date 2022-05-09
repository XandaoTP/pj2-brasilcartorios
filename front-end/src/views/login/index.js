import { Container } from "react-bootstrap";
import { AuthForm } from "../../components/authform";

export function Loginpage() {
    return (
        <main className="bg-dark bg-gradient p-2">
            <Container className="bg-white rouded p-3 p-md-5">
            <AuthForm/>
            </Container>
        </main>
        
    )
}