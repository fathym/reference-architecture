import { AllAnyTypes } from './AllAnyTypes';

export class EaCApplicationLookupConfiguration {
  public AccessRightsAllAny?: AllAnyTypes;

  public AllowedMethods?: Array<string>;

  public HeaderRegex?: string;

  public IsPrivate?: boolean;

  public IsTriggerSignIn?: boolean;

  public LicensesAllAny?: AllAnyTypes;

  public PathRegex?: string;

  public QueryRegex?: string;

  public UserAgentRegex?: string;

  constructor() {
    this.AccessRightsAllAny = AllAnyTypes.Any;

    this.LicensesAllAny = AllAnyTypes.All;
  }
}
