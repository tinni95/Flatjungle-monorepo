import Layout from "../../components/Layout";
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PageHeaderUni from "../../components/PageHeaderUni";

const university = gql`
query university($id:ID!){
    university(id:$id){
        Title
        image {
            url
        }
    }
}
`;
export default function Post( ) {
    const router = useRouter()
    const { uni } = router.query
    const { loading, error, data } = useQuery(university,{variables:{
        id:uni
    }});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <Layout>
          <PageHeaderUni imgSrc={data.university.image.url}></PageHeaderUni>
        {console.log(data.university.Title)}
      </Layout>
    )
  }
  
