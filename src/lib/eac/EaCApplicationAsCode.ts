import { EaCDataToken } from './EaCDataToken';
import { EaCLowCodeUnit } from './EaCLowCodeUnit';
import { EaCProcessor } from './EaCProcessor';
import { EaCApplicationDetails } from './EaCApplicationDetails';
import { EaCApplicationLookupConfiguration } from './EaCApplicationLookupConfiguration';

export class EaCApplicationAsCode {
  public AccessRightLookups?: Array<string>;

  public Application?: EaCApplicationDetails;

  public DataTokens?: { [lookup: string]: EaCDataToken };

  public LicenseConfigurationLookups?: Array<string>;

  public LookupConfig?: EaCApplicationLookupConfiguration;

  public LowCodeUnit?: EaCLowCodeUnit;

  public ModifierLookups?: Array<string>;

  public Processor?: EaCProcessor;
}
