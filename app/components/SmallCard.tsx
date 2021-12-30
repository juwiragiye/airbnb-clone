interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

export function SmallCard({ item }: { item: ExploreData }) {
  return (
    <div
      key={item.img}
      className="flex items-center space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-100 transition-transform duration-200 ease-out mt-5"
    >
      <div className="relative h-16 w-16">
        <img
          className="object-fill rounded-lg "
          src={item.img}
          alt={item.location}
        />
      </div>
      <div>
        <h2>{item.location}</h2>
        <h3>{item.distance}</h3>
      </div>
    </div>
  );
}
