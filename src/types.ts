export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  more: string;
  demo?: string;
}

export interface Profile {
  title: string;
  content: string;
}

export interface Contacts {
  iconName: string;
  kind: string;
  url: string;
}