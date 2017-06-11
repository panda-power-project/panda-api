# panda-api

## Get Started Guide
    npm i -g serverless
    
    // Setup your credentials
    https://serverless.com/framework/docs/providers/aws/guide/credentials/
    // I personally setup a seperate profile called project-panda 
    https://serverless.com/framework/docs/providers/aws/guide/credentials#use-an-existing-aws-profile

    cd contents/
    // Deploy (Use this to setup)
    serverless deploy (--aws-profile project-panda)
    
    // Deploy faster
    serverless deploy function -f [functionName eg. getContents] (--aws-profile project-panda)

    // Stream Logs
    serverless logs -f [functionName eg. getContents] -t (--aws-profile project-panda)

    // CleanUp
    serverless remove (--aws-profile project-panda)