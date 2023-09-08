import { PawHubContainer } from "components/layout/Grid/PetCardFlex";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PawHubContainer>
      <div className="my-8">
        <h1 className="font-amatic text-5xl font-bold mb-4">Adopting Pets</h1>
        <p>
          Adopting pets is a compassionate way to find your family&apos;s newest
          best friend. In the USA alone, around 6.5 million companion pets enter
          shelters each year, including dogs and cats. Tragically, only about
          3.2 million of them find forever homes, while approximately 1.5
          million are euthanized (Statistics provided by
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.aspca.org/animal-homelessness/shelter-intake-and-surrender/pet-statistics"
          >
            ASPCA
          </a>
          ).
        </p>
        <p className="font-bold">
          More information about adopting pets can be found at the links below:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <a
              href="https://www.petfinder.com/pet-adoption-2/pet-adoption-information/"
              target="_blank"
              rel="noreferrer"
            >
              Pet Finder
            </a>
          </li>
          <li>
            <a
              href="https://www.humanesociety.org/resources/top-reasons-adopt-pet"
              target="_blank"
              rel="noreferrer"
            >
              Humane Society
            </a>
          </li>
          <li>
            <a
              href="https://www.petcarehospital.net/blog/adopting-instead-of-buying-a-pet"
              target="_blank"
              rel="noreferrer"
            >
              Petcare Hospital
            </a>
          </li>
        </ul>
        <p className="font-bold">
          That leaves 1.8 million pets untouched, waiting for a loving home.
        </p>
        <p>
          By adopting a pet, you not only save a life but also benefit from cost
          savings compared to purchasing a pet. Many shelter pets are already
          house-trained and used to living with humans, making the transition
          easier for both of you.
        </p>
        <p>
          Moreover, adopting a pet brings immense joy and companionship to your
          life. Studies have shown that pets can reduce stress and promote
          emotional well-being. They are loyal friends who will always be by
          your side, providing unconditional love and support.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.petfinder.com/pet-adoption-2/pet-adoption-information/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mx-4"
          >
            Pet Finder
          </a>
          <a
            href="https://www.humanesociety.org/resources/top-reasons-adopt-pet"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mx-4"
          >
            Humane Society
          </a>
          <a
            href="https://www.petcarehospital.net/blog/adopting-instead-of-buying-a-pet"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Petcare Hospital
          </a>
        </div>
      </div>
      <hr />
      <div className="flex justify-center mt-4">
        <h2 className="font-amatic text-4xl font-bold">Adopt a Buddy Today!</h2>
        <Link to="/pets" className="btn btn-primary ml-4">
          Adopt
        </Link>
      </div>
    </PawHubContainer>
  );
}
