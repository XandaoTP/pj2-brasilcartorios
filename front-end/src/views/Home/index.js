import { Carousel, Container, Nav } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import imgcar from '../../assets/img/documentos1.png'
import firsts from '../../assets/img/banner-certidao.jpg'
import secondimg from '../../assets/img/documentos-autenticar.jpg'
import { Link } from "react-router-dom";


export function Webview() {
    return (
      <Layout>
        <Carousel className='carrousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firsts} height="250px"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img1"
            src={secondimg} height="250px"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="home-grid">
          <div>
            <p>Nós sabemos que nem sempre é fácil e tranquilo localizar e solicitar documentos em cartório. Pensando nisso surgiu o Brasil Cartórios. Localizamos e solicitamos documentos em todo e qualquer carório extrajudicial do Brasil. Utilizar os nossos serviços é muito fácil, basta se cadastrar no serviço notarial desejado<span ><Nav as={Link} to="/servicosnotariais">clicando aqui</Nav> </span></p>
          </div>         
          <div>        
            <img src={imgcar} width='100%' alt="documento"></img>
          </div>  
        </div>
      </Container>  
      </Layout>
    )
  }