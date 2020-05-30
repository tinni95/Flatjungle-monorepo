/* pages/index.js */
import Layout from "../components/Layout";
import { Button, Container } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Config from "../lib/config";
import S3 from "../lib/digitalocean";
import { Formik } from "formik";
import * as Yup from "yup";
import Dropzone from 'react-dropzone'
import Pdf from "../public/images/pdf.svg"

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
      <Container maxWidth="sm">
      <div className="center">
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <Pdf height="50"/>
            </div>
          </section>
        )}
      </Dropzone>
      <Formik
      initialValues={{ course: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        course: Yup.string()
          .required("Required"),
        title: Yup.string()
        .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="course" style={{ display: "block" }}>
              Course
            </label>
            <input
              id="course"
              placeholder="Enter course name"
              type="text"
              value={values.course}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.course && touched.course
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.course && touched.course && (
              <div className="input-feedback">{errors.course}</div>
            )}
            <label htmlFor="title" style={{ display: "block" }}>
              Title
            </label>
            <input
              id="title"
              placeholder="Enter note title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.title && touched.title
                  ? "text-input error"
                  : "text-input"
              }
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
      <Button
      variant="contained"
      component="label"
      startIcon={<CloudUploadIcon />}
      >
      Upload File
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
     </Button>
      </div>
      </Container>
      <style jsx>
          {`
            .dropzone{
              background-color:lightblue;
              height:10rem;
              display: flex;
              justify-content: center;
            }
            .center{
              text-align: center;
              margin:10px;
            }
            * {
              box-sizing: border-box;
              font-family: ;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
                sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 14px;
              line-height: 1.5;
              color: #24292e;
              background-color: #fff;
            }
            
            .app {
              margin: 2rem;
            }
            
            a {
              color: #08c;
            }
            
            input {
              padding: .5rem;
              font-size: 16px;
              width: 100%;
              display: block;
              border-radius: 4px;
              border: 1px solid #ccc;
            }
            
            input:focus {
              border-color: #007eff;
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 0 3px rgba(0, 126, 255, 0.1);
              outline: none;
            }
            
            input.error {
              border-color: red;
            }
            
            label {
              margin-top:1.5rem;
              float:left;
              font-weight: bold;
              display: block;
              margin-bottom: .5rem;
            }
            
            .input-feedback {
              color: red;
              margin-top: .25rem;
            }
            
            button {
              max-width: 150px;
              margin: 20px 0;
              padding: 12px 20px;
              border-style: none;
              border-radius: 5px;
              background-color: #08c;
              box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
              font-size: 17px;
              font-weight: 500;
              color: #fff;
              cursor: pointer;
              outline: none;
              -webkit-appearance: none;
            }
            
            button:disabled {
              opacity: .5;
              cursor: not-allowed !important;
            }
          
            button.outline {
              background-color: #eee;
              border: 1px solid #aaa;
              color: #555;
            }
            
          `}
        </style>
    </Layout>
  );
};