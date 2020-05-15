import styles from './PageHeader.module.css'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {universities} from '../constants/universities';
import { useRouter } from 'next/router'

export default function PageHeader () {
const router = useRouter();
const handleClick = e => {
  e.preventDefault()
  console.log("mammt")
  router.push("/notes")
}

return <div className={styles.header}>
    <Container maxWidth="sm">
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={universities.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cerca input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </Container>
</div>
}