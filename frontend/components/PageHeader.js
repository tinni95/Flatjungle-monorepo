import styles from './PageHeader.module.css'
import { Container, 
    Row,
     Col,
     InputGroup,
     InputGroupAddon,
     Input,
     Button,
    } from 'reactstrap'
import Link from 'next/link'

export default () => {
return <div className={styles.header}>
    <Container >
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}> 
        <h1 className={styles.heading}>Search your note</h1>
        <InputGroup>
        <InputGroupAddon addonType="append"><Link href="/notes">
                <a className="nav-link">Cerca</a>
              </Link></InputGroupAddon>
        <Input />
        </InputGroup>
        </Col>
      </Row>
    </Container>
</div>
}