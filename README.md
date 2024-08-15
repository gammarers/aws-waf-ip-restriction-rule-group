# AWS WAF(V2) IP Restriction Rule Group

[![GitHub](https://img.shields.io/github/license/gammarers/aws-waf-ip-restriction-rule-group?style=flat-square)](https://github.com/gammarers/aws-waf-ip-restriction-rule-group/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-waf-ip-restriction-rule-group?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-waf-ip-restriction-rule-group)
[![PyPI](https://img.shields.io/pypi/v/gammarers.aws-waf-ip-restriction-rule-group?style=flat-square)](https://pypi.org/project/gammarers.aws-waf-ip-restriction-rule-group/)
[![Nuget](https://img.shields.io/nuget/v/Gammarers.CDK.AWS.WafIpRestrictionRuleGroup?style=flat-square)](https://www.nuget.org/packages/Gammarers.CDK.AWS.WafIpRestrictionRuleGroup/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-waf-ip-restriction-rule-group/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-waf-ip-restriction-rule-group/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-waf-ip-restriction-rule-group?sort=semver&style=flat-square)](https://github.com/gammarers/aws-waf-ip-restriction-rule-group/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-waf-ip-restriction-rule-group)](https://constructs.dev/packages/@gammarers/aws-waf-ip-restriction-rule-group)

This is an AWS CDK Construct for IP Restriction Rule Group on WAF V2

## Resources

This construct creating resource list.

- WAF V2 RuleGroup

## Install

### TypeScript

#### install by npm

```shell
npm install @gammarers/aws-waf-ip-restriction-rule-group
```

#### install by yarn

```shell
yarn add @gammarers/aws-waf-ip-restriction-rule-group
```

#### install by pnpm

```shell
pnpm add @gammarers/aws-waf-ip-restriction-rule-group
```

#### install by bun

```shell
bun add @gammarers/aws-waf-ip-restriction-rule-group
```

### Python

```shell
pip install gammarers.aws-waf-ip-restriction-rule-group
```

### C# / .Net

```shell
dotnet add package Gammarers.CDK.AWS.WafIpRestrictionRuleGroup
```

## Example

```typescript
import { WafIpRestrictRuleGroup } from '@gammarers/aws-waf-ip-restriction-rule-group';

declare const allowIpSet: waf.CfnIPSet;

new WafIpRestrictRuleGroup(stack, 'WafIpRestrictRuleGroup', {
  scope: Scope.GLOBAL, // GLOBAL(CloudFront) or REGIONAL(Application Load Balancer (ALB), Amazon API Gateway REST API, an AWS AppSync GraphQL API, or an Amazon Cognito user pool)
  allowIpSetArn: allowIpSet.attrArn,
});

```

## License

This project is licensed under the Apache-2.0 License.
