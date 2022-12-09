const { Stack, Duration } = require('aws-cdk-lib')
// const sqs = require('aws-cdk-lib/aws-sqs');
const cdk = require('aws-cdk-lib')
const s3 = require('aws-cdk-lib/aws-s3')
const iam = require('aws-cdk-lib/aws-iam')

class InfrastructureStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    const bucket = new s3.Bucket(this, 'DevconnectorBucket', {
      //   bucketName:
      //     'infrastructurestack-devconnectorbucketf1dd6b6f-12fkmrmwlqv55',
      websiteIndexDocument: 'index.html', // 1
      blockPublicAccess: new s3.BlockPublicAccess({
        restrictPublicBuckets: false,
      }), // 2
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`],
      principals: [new iam.Anyone()],
    })
    bucket.addToResourcePolicy(bucketPolicy) // 4
  }
}

module.exports = { InfrastructureStack }
