'use strict';

module.exports = {
  getContents,
}

function getContents (event, context, callback) {
  const data = {
    "header": "This is a test header",
    "subheader": "This is a test subheader",
    "title1": "Capture their attention",
    "content1": "",
    "image1": "http://placehold.it/350x350",
    "title2": "Strike an impression",
    "content2": "This is the content text for segment 2",
    "image2": "http://placehold.it/350x350",
    "title3": "Leave a memory",
    "content3": "",
    "image3": "http://placehold.it/350x350",
    "ctaText": "What are you waiting for?"
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: 1,
        user: 1,
        template: 1,
        site: 1,
        data,
        active: true,
        dateCreated: 1497125327840,
        dateModified: 1497125327840
      }
    ]),
    // body: JSON.stringify({
    //   message: 'Go Serverless v1.0! Your function executed successfully!',
    //   input: event,
    //   context,
    // }),
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}