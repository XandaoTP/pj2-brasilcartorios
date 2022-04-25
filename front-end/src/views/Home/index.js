import { Card, Col, Container, Row } from "react-bootstrap";
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
            <p className='font-weight-bold mb-0'>Nós sabemos que nem sempre é fácil e tranquilo localizar e solicitar documentos em cartório. Pensando nisso surgiu o Brasil Cartórios. Localizamos e solicitamos documentos em todo e qualquer cartório extrajudicial do Brasil. Utilizar os nossos serviços é muito fácil, basta se cadastrar no serviço notarial desejado.</p>     
        </div >
          <img
            className="d-block w-100"
            src={firsts} height="250px"
            alt="First slide"
          />  
        <div>
          <Row>
          <Col xs={12} md={6} lg={6} className='mb-3'>  
            <h3 className="text-center font-weight-bold home">Informações úteis</h3>
            <img src={secondimg} alt='documentoexterior' width='100%' className="mb-1"/>
            <img src='/cart-protesto.jpg' width='100%' alt='protesto'/>
          </Col>
          <Col xs={12} md={6} lg={6} className='mb-3 text-center'>  
            <h3 className="font-weight-bold text-center home">Links úteis</h3>
            <Card className='bg-secondary mb-2 '>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white align-items-center ">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
            <Card className='bg-secondary mb-2'>
              <a href="https://www.cnj.jus.br/corregedoriacnj/" className="text-center mb-2 text-decoration-none text-white">Corregedoria Nacional</a>
            </Card>
          </Col>
          </Row>
        </div>
      </Container>  
      </Layout>
    )
  }