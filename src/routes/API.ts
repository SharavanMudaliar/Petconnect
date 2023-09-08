import { PetListType } from "types/PetType";

export const lookUpPet = "https://api.petfinder.com/v2/animals/";

export const petFinderURL = (
  type: PetListType,
  page: number,
  location: number | string
) =>
  `https://api.petfinder.com/v2/animals?type=${type}&location=${location}&limit=12&page=${
    page || 1
  }`;
export const randomPetsList =
  "https://api.petfinder.com/v2/animals?limit=3&sort=random";
