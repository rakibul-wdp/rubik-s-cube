import { StaticImageData } from "next/image";

export interface INavLinks {
  id: number;
  title: string;
  path: string;
}

export interface IOLLs {
  id: number;
  name: string;
  algo: string;
  image: StaticImageData;
}
