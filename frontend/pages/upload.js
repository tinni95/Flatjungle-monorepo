/* pages/index.js */
import Layout from "../components/Layout";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Config from "../lib/config";
import S3 from "../lib/digitalocean";

export default () => {  
 const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const blob = e.target.files[0];
      const params = { Body: blob, 
                       Bucket: `${Config.bucketName}`, 
                       Key: blob.name};
       // Sending the file to the Spaces
       S3.putObject(params)
         .on('build', request => {
           request.httpRequest.headers.Host = `${Config.digitalOceanSpaces}`;
           request.httpRequest.headers['Content-Length'] = blob.size;
           request.httpRequest.headers['Content-Type'] = blob.type;
           request.httpRequest.headers['x-amz-acl'] = 'public-read';
        })
        .send((err) => {
          if (err) console.log(err)
          else {
          // If there is no error updating the editor with the imageUrl
          const imageUrl = `${Config.digitalOceanSpaces}` + blob.name
          console.log(imageUrl, blob.name)
         }
      });
    }
  };

  return (
    <Layout>
      <div className="center">
      <Button
        variant="contained"
        color="default"
        startIcon={<CloudUploadIcon />}
      >
        Upload
        <input type="file" id="inputfile" accept="pdf/*"
            onChange={handleImageChange} />
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