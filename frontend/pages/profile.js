/* pages/index.js */
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";


export default () => {  
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault()
    router.push("/upload")
  }
  return (
    <Layout>
      <div className="center">
      <Button onClick={handleClick} variant="contained" color="primary">
      Add new note
      </Button>
      </div>
      <style jsx>
          {`
            .center{
              text-align: center;
              margin:10px;
            }
          `}
        </style>
    </Layout>
  );
};