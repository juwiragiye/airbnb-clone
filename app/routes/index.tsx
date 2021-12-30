import { LoaderFunction, useLoaderData } from "remix";
import { Banner } from "~/components/Banner";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { LargeCard } from "~/components/LargeCar";
import { MediumCard } from "~/components/MediumCard";
import { SmallCard } from "~/components/SmallCard";

type ExploreData = {
  img: string;
  location: string;
  distance: string;
};

export type CardType = {
  img: string;
  title: string;
};
type LoaderData = {
  exploreData: ExploreData[];
  cardsData: CardType[];
};

export let loader: LoaderFunction = async () => {
  let explore = await fetch("https://links.papareact.com/pyp");
  let cards = await fetch("https://links.papareact.com/zp1");
  let data: LoaderData = {
    exploreData: await explore.json(),
    cardsData: await cards.json(),
  };

  return data;
};

export default function Index() {
  let { exploreData, cardsData } = useLoaderData<LoaderData>();
  console.log(exploreData);
  return (
    <>
      <Header />
      <Banner />
      <main className="relative max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-slate-600 ">
            Exlpore Nearby
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12">
            {exploreData?.map((item?) => (
              <SmallCard item={item} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold text-slate-600 py-8">
            Live Anywhere
          </h2>
          <div className="flex gap-3 overflow-scroll scrollbar-hide  ">
            {cardsData?.map((card) => (
              <MediumCard card={card} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired!"
        />
      </main>
      <Footer />
    </>
  );
}
