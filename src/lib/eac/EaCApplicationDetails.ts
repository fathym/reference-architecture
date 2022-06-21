export class EaCApplicationDetails {
  public Description?: string;

  public Name?: string;

  public Priority?: number;

  /**
   * Used for tweaking the overall ranking of an applications priority during computation.
   */
  public PriorityShift?: number;
}
