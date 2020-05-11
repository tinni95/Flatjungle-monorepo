import styles from './iframe.module.css'

export default ({src}) => {
    return <iframe scrolling="no" className={styles.frame} src={"http://localhost:1337/"+src }title="title">
    Presss me: <a href="./resources/crayola.pdf">Download PDF</a>
    </iframe>
}