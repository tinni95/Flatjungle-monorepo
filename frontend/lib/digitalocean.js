import AWS from 'aws-sdk';

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndpoint = new AWS.Endpoint('ams3.digitaloceanspaces.com');
const s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: "543Y5EJXJDJ4V2KDW2K3",
      secretAccessKey: "X0FUB9WYs+/h6m63yvKOjphFR/OJSUCupB+GtTnldVo"
    });
export default s3;