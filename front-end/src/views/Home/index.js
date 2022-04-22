import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import firsts from '../../assets/img/banner-certidao.jpg'
import secondimg from '../../assets/img/documentos-autenticar.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import cartserv from '../../assets/img/cartorio-e-servico.png'


export function Webview() {
    return (
      <Layout>
        <Container>
        <h1 className="text-center mt-3 mb-3 text-success"> CARTÓRIO É SERVIÇO</h1>
        <img src={cartserv}  alt='Cartório' width ='100%' className="mt-0"/> 
        <div className="home">         
            <p className='font-weight-bold mb-0'>Nós sabemos que nem sempre é fácil e tranquilo localizar e solicitar documentos em cartório. Pensando nisso surgiu o Brasil Cartórios. Localizamos e solicitamos documentos em todo e qualquer carório extrajudicial do Brasil. Utilizar os nossos serviços é muito fácil, basta se cadastrar no serviço notarial desejado.</p>     
        </div >
        <Carousel className='carrousel'>
        <Carousel.Item data-interval="5">
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
        <div>
          <Row>
          <Col xs={6} md={6} lg={6} className='mb-3 text-center'>  
            <h3>Links uteis</h3>
            <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center">Corregedoria Nacional</a>
          </Col>
          <Col xs={6} md={6} lg={6} className='mb-3'>  
            <h3 className="text-center">Noticias</h3>
          </Col>
          </Row>
        </div>
      </Container>  
      </Layout>
    )
  }