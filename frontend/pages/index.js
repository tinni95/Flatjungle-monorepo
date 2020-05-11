/* pages/index.js */
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const notes = gql`
{
  notes{
    title
  }
}
`;

export default () => {  
   const { loading, error, data } = useQuery(notes);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <PageHeader></PageHeader>
        {data.notes.map(note=>{
     {       console.log(note.title)}
           return <p>{note.title}</p>
        })}
    </Layout>
  );
};