import { INavLinks, IOLLs } from "@/interface";
import {
  antiSune26,
  bowtie25,
  h21,
  headlights23,
  leftySquare5,
  pi22,
  rightySquare6,
  shoelaces33,
  suitUp45,
  sune27,
  t24,
} from "../assets/images/oll";

export const navLinks: INavLinks[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "F2L",
    path: "/f2l",
  },
  {
    id: 3,
    title: "OLL",
    path: "/oll",
  },
  {
    id: 4,
    title: "PLL",
    path: "/pll",
  },
];

export const OLLs: IOLLs[] = [
  {
    id: 1,
    name: "27 SUNE",
    algo: "(R U R' U) (R 2U R')",
    image: sune27,
  },
  {
    id: 2,
    name: "26 ANTI SUNE",
    algo: "R 2U R' U' R U' R'",
    image: antiSune26,
  },
  {
    id: 3,
    name: "24 T",
    algo: "(r U R' U') (r' F R F')",
    image: t24,
  },
  {
    id: 4,
    name: "23 HEADLIGHTS",
    algo: "2R D (R' 2U R) D' (R' 2U R')",
    image: headlights23,
  },
  {
    id: 5,
    name: "25 BOWTIE",
    algo: "F' (r U R' U') (r' F R)",
    image: bowtie25,
  },
  {
    id: 6,
    name: "22 Pi",
    algo: "R 2U (2R' U' 2R U') (2R' 2U R)",
    image: pi22,
  },
  {
    id: 7,
    name: "21 H",
    algo: "F 3(R U R' U') F'",
    image: h21,
  },
  {
    id: 8,
    name: "33 SHOELACES",
    algo: "(R U R' U') (R' F R F')",
    image: shoelaces33,
  },
  {
    id: 9,
    name: "45 SUIT UP",
    algo: "F (R U R' U') F'",
    image: suitUp45,
  },
  {
    id: 10,
    name: "05 LEFTY SQUARE",
    algo: "r' 2U (R U R' U) r",
    image: leftySquare5,
  },
  {
    id: 11,
    name: "06 RIGHTY SQUARE",
    algo: "r 2U (R' U' R U') r'",
    image: rightySquare6,
  },
];
