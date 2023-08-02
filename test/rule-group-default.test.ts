import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Scope, WafIpRestrictRuleGroup } from '../src';

describe('Web ACL Rule Group default testing', () => {

  describe('Web Acl Rule Group scope=global testing', () => {

    const app = new App();
    const stack = new Stack(app, 'TestingStack', {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });

    const allowIpSet = new waf.CfnIPSet(stack, 'IpSet', {
      addresses: [
        '192.0.2.0/24',
        '198.51.100.0/24',
        '203.0.113.0/24',
      ],
      ipAddressVersion: 'IPV4',
      scope: 'CLOUDFRONT',
    });

    const ruleGroup = new WafIpRestrictRuleGroup(stack, 'WafIpRestrictRuleGroup', {
      scope: Scope.GLOBAL,
      allowIpSetArn: allowIpSet.attrArn,
    });

    it('Is Waf RuleGroup', async () => {
      expect(ruleGroup).toBeInstanceOf(waf.CfnRuleGroup);
    });

    const template = Template.fromStack(stack);

    it('Should have WAF Rule Group', async () => {
      template.hasResourceProperties('AWS::WAFv2::RuleGroup', Match.objectEquals({
        Description: 'ip restrict rule group',
        Scope: 'CLOUDFRONT',
        Capacity: 10,
        CustomResponseBodies: {
          'ip-restrict': {
            Content: 'Sorry, You Are Not Allowed to Access This Service.',
            ContentType: 'TEXT_PLAIN',
          },
        },
        Rules: Match.arrayWith([
          {
            Priority: 0,
            Name: 'allow-ip-rule',
            Action: {
              Allow: {},
            },
            VisibilityConfig: {
              CloudWatchMetricsEnabled: true,
              MetricName: 'AllowIpRule',
              SampledRequestsEnabled: true,
            },
            Statement: {
              IPSetReferenceStatement: {
                Arn: {
                  'Fn::GetAtt': ['IpSet', 'Arn'],
                },
              },
            },
          },
          {
            Priority: 1,
            Name: 'deny-ip-rule',
            Action: {
              Block: {
                CustomResponse: {
                  CustomResponseBodyKey: 'ip-restrict',
                  ResponseCode: 403,
                },
              },
            },
            VisibilityConfig: {
              CloudWatchMetricsEnabled: true,
              MetricName: 'DenyIpRule',
              SampledRequestsEnabled: true,
            },
            Statement: {
              NotStatement: {
                Statement: {
                  IPSetReferenceStatement: {
                    Arn: {
                      'Fn::GetAtt': ['IpSet', 'Arn'],
                    },
                  },
                },
              },
            },
          },
        ]),
        VisibilityConfig: {
          CloudWatchMetricsEnabled: true,
          MetricName: 'IpRestrictRule',
          SampledRequestsEnabled: true,
        },
      }));
    });

    it('Should match snapshot', async () => {
      expect(template.toJSON()).toMatchSnapshot('global');
    });

  });

  describe('Web Acl Rule Group scope=regional testing', () => {

    const app = new App();
    const stack = new Stack(app, 'TestingStack', {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });

    const allowIpSet = new waf.CfnIPSet(stack, 'IpSet', {
      addresses: [
        '192.0.2.0/24',
        '198.51.100.0/24',
        '203.0.113.0/24',
      ],
      ipAddressVersion: 'IPV4',
      scope: 'REGIONAL',
    });

    const ruleGroup = new WafIpRestrictRuleGroup(stack, 'WafIpRestrictRuleGroup', {
      name: 'example-waf-ip-restrict-rule-group',
      scope: Scope.REGIONAL,
      allowIpSetArn: allowIpSet.attrArn,
    });

    it('Is Waf RuleGroup', async () => {
      expect(ruleGroup).toBeInstanceOf(waf.CfnRuleGroup);
    });

    const template = Template.fromStack(stack);

    it('Should have WAF Rule Group', () => {
      template.hasResourceProperties('AWS::WAFv2::RuleGroup', Match.objectEquals({
        Name: 'example-waf-ip-restrict-rule-group',
        Description: 'ip restrict rule group',
        Scope: 'REGIONAL',
        Capacity: 10,
        CustomResponseBodies: {
          'ip-restrict': {
            Content: 'Sorry, You Are Not Allowed to Access This Service.',
            ContentType: 'TEXT_PLAIN',
          },
        },
        Rules: Match.arrayWith([
          {
            Priority: 0,
            Name: 'allow-ip-rule',
            Action: {
              Allow: {},
            },
            VisibilityConfig: {
              CloudWatchMetricsEnabled: true,
              MetricName: 'AllowIpRule',
              SampledRequestsEnabled: true,
            },
            Statement: {
              IPSetReferenceStatement: {
                Arn: {
                  'Fn::GetAtt': ['IpSet', 'Arn'],
                },
              },
            },
          },
          {
            Priority: 1,
            Name: 'deny-ip-rule',
            Action: {
              Block: {
                CustomResponse: {
                  CustomResponseBodyKey: 'ip-restrict',
                  ResponseCode: 403,
                },
              },
            },
            VisibilityConfig: {
              CloudWatchMetricsEnabled: true,
              MetricName: 'DenyIpRule',
              SampledRequestsEnabled: true,
            },
            Statement: {
              NotStatement: {
                Statement: {
                  IPSetReferenceStatement: {
                    Arn: {
                      'Fn::GetAtt': ['IpSet', 'Arn'],
                    },
                  },
                },
              },
            },
          },
        ]),
        VisibilityConfig: {
          CloudWatchMetricsEnabled: true,
          MetricName: 'IpRestrictRule',
          SampledRequestsEnabled: true,
        },
      }));
    });

    it('Should match snapshot', async () => {
      expect(template.toJSON()).toMatchSnapshot('regional');
    });

  });

});