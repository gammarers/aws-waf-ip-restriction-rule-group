# AWS WAF(V2) IP Restriction Rule Group

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