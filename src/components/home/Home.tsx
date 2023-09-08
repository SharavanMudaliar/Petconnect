import PetCardFlex, {
  PawHubContainer,
} from "components/layout/Grid/PetCardFlex";
import PetCard from "components/layout/PetCard";
import { Button, Hero } from "react-daisyui";
import useSWR from "swr";
import { PetSearchType } from "utils/petTypeFetcher";

import { usePetAuth } from "../../context/TokenContext";
import { randomPetsList } from "../../routes/API";
import { fetcher } from "../../utils/homePageFetcher";
import LoadPlaceHolder from "../shared/PlaceHolderCard";
import "./home.css";
import load from "./loding.png";

export default function Home() {
  const scrollToFeaturedPets = () => {
    const featuredPetsSection = document.getElementById("featured-pets");
    if (featuredPetsSection) {
      featuredPetsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero className="home__background min-h-screen">
        <Hero.Overlay className="bg-opacity-60" />
        <Hero.Content className="text-center">
          <div className="max-w-md text-base-100">
            <h1 className="text-5xl font-bold font-amatic text-yellow-500">
              CONNECT WITH YOU BEST FRIEND
            </h1>
            <h2 className="text-5xl font-bold font-amatic text-yellow-500">
              {" "}
              NOW AND FOREVER{" "}
            </h2>
            <Button
              className="bg-blue-500 text-yellow-500"
              onClick={scrollToFeaturedPets}
            >
              Get Started
            </Button>
          </div>
        </Hero.Content>
      </Hero>
      <div id="featured-pets"></div>
      <LoadingPetCards />
    </div>
  );
}

// ... (unchanged code)

const LoadingPetCards = () => {
  const { tokenHeaders } = usePetAuth();
  const {
    error,
    data: petList,
    mutate,
  } = useSWR(tokenHeaders ? [randomPetsList, tokenHeaders] : null, fetcher, {
    revalidateOnFocus: false,
  });
  const mutatePetlist = async () => mutate({} as PetSearchType);
  const isLoading = !error && !petList?.animals;

  if (isLoading)
    return (
      <PawHubContainer>
        <h2 className="text-5xl font-bold font-amatic">Loading Pets</h2>
        <PetCardFlex>
          <LoadPlaceHolder />
          <LoadPlaceHolder />
          <LoadPlaceHolder />
        </PetCardFlex>{" "}
        <Button className="bg-blue-500 text-yellow-500">
          <img className="rotate" src={load} alt="spinner" />
        </Button>
      </PawHubContainer>
    );
  if (error || !petList)
    return (
      <>
        <h5>Oops! An Error Occurred Getting The Pets</h5>{" "}
        <Button
          className="bg-blue-500 text-yellow-500 refresh"
          onClick={mutatePetlist}
        >
          Refresh
        </Button>
      </>
    );

  return (
    <PawHubContainer>
      <h2 className="text-5xl font-bold font-amatic">Featured Pets</h2>

      <PetCardFlex>
        {petList.animals.map((pet) => (
          <PetCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            photos={pet.photos}
            type={pet.type}
            breeds={pet.breeds}
            primary_photo_cropped={pet.primary_photo_cropped}
          />
        ))}
      </PetCardFlex>

      <Button className="bg-blue-500 text-yellow-500" onClick={mutatePetlist}>
        Refresh
      </Button>
    </PawHubContainer>
  );
};
