import { EaCApplicationAsCode } from './EaCApplicationAsCode';
import { EaCProvider } from './EaCProvider';
import { EaCProjectAsCode } from './EaCProjectAsCode';
import { EaCEnvironmentAsCode } from './EaCEnvironmentAsCode';
import { EaCDataToken } from './EaCDataToken';
import { EaCAccessRight } from './EaCAccessRight';
import { EaCDFSModifier } from './EaCDFSModifier';
import { EaCHost } from './EaCHost';
import { EaCLicenseConfiguration } from './EaCLicenseConfiguration';
import { EaCEnterpriseDetails } from './EaCEnterpriseDetails';

export class EnterpriseAsCode {
  public AccessRights?: { [lookup: string]: EaCAccessRight };

  public Applications?: { [lookup: string]: EaCApplicationAsCode };

  public DataTokens?: { [lookup: string]: EaCDataToken };

  public Enterprise?: EaCEnterpriseDetails;

  public EnterpriseLookup?: string;

  public Environments?: { [lookup: string]: EaCEnvironmentAsCode };

  public Hosts?: { [lookup: string]: EaCHost };

  public LicenseConfigurations?: { [lookup: string]: EaCLicenseConfiguration };

  public Modifiers?: { [lookup: string]: EaCDFSModifier };

  public Projects?: { [lookup: string]: EaCProjectAsCode };

  public Providers?: { [lookup: string]: EaCProvider };
}
