import { EaCAccessConfiguration } from './EaCAccessConfiguration';

export class EaCRelyingParty {
  public AccessRightLookups?: Array<string>;

  public AccessConfigurations?: { [lookup: string]: EaCAccessConfiguration };

  public DefaultAccessConfigurationLookup?: string;

  public TrustedProviderLookups?: Array<string>;
}
