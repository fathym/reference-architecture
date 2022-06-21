import { EaCSourceControl } from './EaCSourceControl';
import { EaCSecret } from './EaCSecret';
import { EaCArtifact } from './EaCArtifact';
import { EaCDevOpsAction } from './EaCDevOpsAction';
import { EaCCloud } from './EaCCloud';
import { EaCEnvironmentDetails } from './EaCEnvironmentDetails';

export class EaCEnvironmentAsCode {
  public Artifacts?: { [lookup: string]: EaCArtifact };

  public Clouds?: { [lookup: string]: EaCCloud };

  public DevOpsActions?: { [lookup: string]: EaCDevOpsAction };

  public Environment?: EaCEnvironmentDetails;

  public Secrets?: { [lookup: string]: EaCSecret };

  public Sources?: { [lookup: string]: EaCSourceControl };
}
