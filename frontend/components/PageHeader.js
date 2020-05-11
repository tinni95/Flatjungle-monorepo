import styles from './PageHeader.module.css'
import Container from '@material-ui/core/Container';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {universities} from '../constants/universities';


export default () => {
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
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </Container>
</div>
}