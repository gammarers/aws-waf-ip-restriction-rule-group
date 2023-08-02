import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export interface WafIpRestrictRuleGroupProps {
  readonly name?: string;
  readonly scope: Scope;
  readonly allowIpSetArn: string;
  //readonly rateLimitCount?: number;
  //whitelist
}

export enum Scope {
  GLOBAL = 'Global',
  REGIONAL = 'Regional',
}

export class WafIpRestrictRuleGroup extends waf.CfnRuleGroup {
  constructor(scope: Construct, id: string, props: WafIpRestrictRuleGroupProps) {
    super(scope, id, {
      name: props.name,
      description: 'ip restrict rule group',
      scope: ((): string => {
        switch (props.scope) {
          case Scope.GLOBAL:
            return 'CLOUDFRONT';
          case Scope.REGIONAL:
            return 'REGIONAL';
        }
      })(),
      capacity: 10,
      rules: [
        {
          priority: 0,
          name: 'allow-ip-rule',
          action: {
            allow: {},
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            sampledRequestsEnabled: true,
            metricName: 'AllowIpRule',
          },
          statement: {
            ipSetReferenceStatement: {
              arn: props.allowIpSetArn,
            },
          },
        },
        {
          priority: 1,
          name: 'deny-ip-rule',
          action: {
            block: {
              CustomResponse: {
                CustomResponseBodyKey: 'ip-restrict',
                ResponseCode: 403,
              },
            },
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            sampledRequestsEnabled: true,
            metricName: 'DenyIpRule',
          },
          statement: {
            notStatement: {
              statement: {
                ipSetReferenceStatement: {
                  arn: props.allowIpSetArn,
                },
              },
            },
          },
        },
      ],
      customResponseBodies: {
        ['ip-restrict']: {
          contentType: 'TEXT_PLAIN',
          content: 'Sorry, You Are Not Allowed to Access This Service.',
        },
      },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        sampledRequestsEnabled: true,
        metricName: 'IpRestrictRule',
      },
    });
  }
}