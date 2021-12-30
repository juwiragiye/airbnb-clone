import type { CardType } from "~/routes";

export function MediumCard({ card }: { card: CardType }) {
  return (
    <div
      key={card.img}
      className="cursor-pointer transition-transform hover:scale-105 ease-in-out p-16"
    >
      <div className="h-80 w-80 cursor-pointer">
        <img src={card.img} alt={card.title} className="rounded-md" />
      </div>
      <h3 className="text-2xl mt-3  text-slate-500">{card.title}</h3>
    </div>
  );
}
