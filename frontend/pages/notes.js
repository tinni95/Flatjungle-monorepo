import Iframe from "../components/Iframe"
import Layout from "../components/Layout"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const notes = gql`
{
  notes{
      title
      pdf{
        url
      }
  }
}
`;

export default () => {
    const { loading, error, data } = useQuery(notes);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return <Layout>
            {data.notes.map(note=>{
           return  <Iframe src={note.pdf.url}></Iframe>
        })}

    </Layout>
}