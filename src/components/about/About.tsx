import { PawHubContainer } from "components/layout/Grid/PetCardFlex";

import GithubIcon from "./GitHub.png";
import Dog from "./dog-cat.jpg";

export default function About() {
  return (
    <PawHubContainer>
      <div className="about__container content-center ">
        <section className="paragraph--section">
          <img
            className=" mx-auto mb-3 rounded-2xl w-1/2 bg-blue-500 text-yellow-500  "
            src={Dog}
            alt="doggo"
          />
          <h1 className="font-amatic text-5xl font-bold ">About PetConnect</h1>
          <p className="my-4">
            The PetConnect project aims to develop a comprehensive website that
            serves as a one-stop platform for pet enthusiasts,offering a variety
            of features including pet adoption. This website is designed to
            cater to pet lovers of all ages, providing a central hub for them to
            connect, share, and engage in various pet-related activities.
          </p>
        </section>
        <h1 className="font-amatic text-5xl font-bold">Links</h1>
        <div className="flex justify-center items-center">
          <a
            target="blank"
            rel="noreferrer"
            href="https://github.com/SharavanMudaliar/Petconnect"
            className="rounded"
          >
            <img
              className="w-12 mx-1 border-primary border-2 rounded-full "
              src={GithubIcon}
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </PawHubContainer>
  );
}
