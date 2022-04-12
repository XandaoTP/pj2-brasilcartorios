import { Carousel, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import imgcar from '../../assets/img/documentos1.png'
import firsts from '../../assets/img/banner-certidao.jpg'



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
            className="d-block w-100"
            src={imgcar} height="250px"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcar} height="250px"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="home-grid">
          <p>Nós sabemos que nem sempre é fácil e tranquilo localizar e solicitar documentos em cartório. Pensando nisso surgiu o Brasil Cartórios. Localizamos e solicitamos documentos em todo e qualquer carório extrajudicial do Brasil.</p>
          <img src={imgcar} width="100%" alt="documento"></img>
        </div>
      </Container>  
      </Layout>
    )
  }