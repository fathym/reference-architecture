import { EaCPrice } from './EaCPrice';

export class EaCPlan {
  public Details?: string;

  public Features?: Array<string>;

  public Featured?: boolean;

  public HeaderName?: string;

  public Name?: string;

  public Prices?: { [lookup: string]: EaCPrice };

  public Popular?: string;

  public Priorty?: number;

  public SuccessRedirect?: string;
}
