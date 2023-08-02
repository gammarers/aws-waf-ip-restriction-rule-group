import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.62.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-ip-restriction-rule-group',
  description: 'This is an AWS CDK Construct for IP Restriction Rule Group on WAF V2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-ip-restriction-rule-group.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();