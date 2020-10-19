export interface IMemberCardBlock {
  block: {
    title: string;
    description: string;
    link: string;
    text: string;
  };
  imageUrl: IImageUrlItem[];
}

export interface IImageUrlItem {
  [name: string]: string;
}

export interface IMemberCardBlockVM {
  block: {
    title: string;
    description: string;
    link: string;
    text: string;
  };
  imageUrl: string;
  imageSrcSet: string;
}
