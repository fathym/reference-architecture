import { EaCDataToken } from './EaCDataToken';
import { EaCRelyingParty } from './EaCRelyingParty';
import { EaCProjectDetails } from './EaCProjectDetails';

export class EaCProjectAsCode {
  public ApplicationLookups?: Array<string>;

  public DataTokens?: { [lookup: string]: EaCDataToken };

  public Hosts?: Array<string>;

  public ModifierLookups?: Array<string>;

  public Project?: EaCProjectDetails;

  public RelyingParty?: EaCRelyingParty;
}
