import styles from './PageHeader.module.css'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const unis = gql`
{
  universities{
      Title
      id
  }
}
`;

export default function PageHeader () {
const { loading, error, data } = useQuery(unis);
const router = useRouter();

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

const handleClick = (e,val) => {
  e.preventDefault()
  router.push("/uni/"+val.id)
}

return <div className={styles.header}>
    <Container maxWidth="sm">
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.universities.map((option) => option)}
        getOptionLabel={(option) => option.Title}
        onChange={(event, newValue) => {
          handleClick(event,newValue);
        }}
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

