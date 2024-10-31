//const { DynamoDB } = require('@aws-sdk/client-dynamodb')
const AWS = require('aws-sdk');

require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const DynamoDB = new AWS.DynamoDB();

const region = "us-west-1" // your preferred region

const client = new DynamoDB({ region })