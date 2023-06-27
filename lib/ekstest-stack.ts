import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PrivateCluster } from './cluster';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import { VpcStack } from './vpc-stack';

export class EkstestStack extends cdk.Stack {
  private cluster: eks.Cluster;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const vpc = new VpcStack(
  this, 
  'ekstest-vpc', 
  props)
  .vpc;  

  this.cluster = new PrivateCluster(this, 'Cluster', vpc).cluster;
    
  }
}
