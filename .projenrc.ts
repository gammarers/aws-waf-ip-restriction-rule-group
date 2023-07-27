import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.62.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-ip-restriction-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-ip-restriction-rule-group.git',
  releaseToNpm: false,
});
project.synth();