import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const counterAtom = atom(0);
export const wishlistCountAtom = atomWithStorage<number>("productCount", 0);
