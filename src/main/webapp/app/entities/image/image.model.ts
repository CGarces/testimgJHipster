export interface IImage {
  id?: number;
  dataContentType?: string;
  data?: string;
}

export class Image implements IImage {
  constructor(public id?: number, public dataContentType?: string, public data?: string) {}
}

export function getImageIdentifier(image: IImage): number | undefined {
  return image.id;
}
