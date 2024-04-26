import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.2.x',
  jsiiVersion: '5.2.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-waf-ip-restriction-rule-group',
  description: 'This is an AWS CDK Construct for IP Restriction Rule Group on WAF V2',
  majorVersion: 1,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-waf-ip-restriction-rule-group.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '20.11.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 1']), // every monday (JST/THU:02:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-waf-ip-restriction-rule-group',
    module: 'gammarers.aws_waf_ip_restriction_rule_group',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarer.CDK.AWS',
    packageId: 'Gammarer.CDK.AWS.WafIpRestrictionRuleGroup',
  },
});
project.synth();