import styles from './iframe.module.css'
import { Container, Row, Col } from 'reactstrap';

export default ({src}) => {
    return <div className={styles.card}>
    <Container >
    <Row >
    <Col>
    <iframe scrolling="no" className={styles.frame} src={"http://localhost:1337/"+src }title="title">
    Presss me: <a href="./resources/crayola.pdf">Download PDF</a>
    </iframe>
    </Col>
    <Col>
    <h1>dadada</h1>
    </Col>
    <Col>
    <p>dadada</p>
    </Col>
    </Row>
    </Container>
    </div>
}