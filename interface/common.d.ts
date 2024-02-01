import { StaticImageData } from "next/image";

export interface INavLinks {
  id: number;
  title: string;
  path: string;
}

export interface IOLLPLLs {
  id: number;
  name: string;
  algo: string;
  image: StaticImageData;
}
