export class Status {
  public Code?: number;

  public get Metadata(): any {
    const meta: any = {};

    const self: any = this;

    for (const prop in self) {
      if (prop !== 'Code' && prop !== 'Message' && prop !== 'Metadata') {
        meta[prop] = self[prop];
      }
    }

    return meta;
  }

  public Message?: string;
}

export function isStatusSuccess(status: Status): boolean {
  return status && status.Code === 0;
}
