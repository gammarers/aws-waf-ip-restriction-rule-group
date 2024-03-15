# AWS WAF(V2) IP Restriction Rule Group

[![GitHub](https://img.shields.io/github/license/yicr/aws-waf-ip-restriction-rule-group?style=flat-square)](https://github.com/yicr/aws-waf-ip-restriction-rule-group/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarer/aws-waf-ip-restriction-rule-group?style=flat-square)](https://www.npmjs.com/package/@gammarer/aws-waf-ip-restriction-rule-group)
[![PyPI](https://img.shields.io/pypi/v/gammarer.aws-waf-ip-restriction-rule-group?style=flat-square)](https://pypi.org/project/gammarer.aws-waf-ip-restriction-rule-group/)
[![Nuget](https://img.shields.io/nuget/v/Gammarer.CDK.AWS.WafIpRestrictionRuleGroup?style=flat-square)](https://www.nuget.org/packages/Gammarer.CDK.AWS.WafIpRestrictionRuleGroup/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.gammarer/aws-waf-ip-restriction-rule-group?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/gammarer/aws-waf-ip-restriction-rule-group/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/yicr/aws-waf-ip-restriction-rule-group/release.yml?branch=main&label=release&style=flat-square)](https://github.com/yicr/aws-waf-ip-restriction-rule-group/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yicr/aws-waf-ip-restriction-rule-group?sort=semver&style=flat-square)](https://github.com/yicr/aws-waf-ip-restriction-rule-group/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarer/aws-waf-ip-restriction-rule-group)](https://constructs.dev/packages/@gammarer/aws-waf-ip-restriction-rule-group)

This is an AWS CDK Construct for IP Restriction Rule Group on WAF V2

## Resources

This construct creating resource list.

- WAF V2 RuleGroup

## Install

### TypeScript

```shell
npm install @gammarer/aws-waf-ip-restriction-rule-group
# or
yarn add @gammarer/aws-waf-ip-restriction-rule-group
```

### Python

```shell
pip install gammarer.aws-waf-ip-restriction-rule-group
```

### C# / .Net

```shell
dotnet add package Gammarer.CDK.AWS.WafIpRestrictionRuleGroup
```

### Java

Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-waf-ip-restriction-rule-group</artifactId>
</dependency>
```

## Example

```typescript
import { WafIpRestrictRuleGroup } from '@gammarer/aws-waf-ip-restriction-rule-group';

declare const allowIpSet: waf.CfnIPSet;

new WafIpRestrictRuleGroup(stack, 'WafIpRestrictRuleGroup', {
  scope: Scope.GLOBAL, // GLOBAL(CloudFront) or REIGONAL(Application Load Balancer (ALB), Amazon API Gateway REST API, an AWS AppSync GraphQL API, or an Amazon Cognito user pool)
  allowIpSetArn: allowIpSet.attrArn,
});

```

## License

This project is licensed under the Apache-2.0 License.
