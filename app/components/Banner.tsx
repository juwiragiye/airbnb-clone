import banner from "~/assets/images/banner.webp";

export function Banner() {
  return (
    <div className="relative h-80 sm:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <img
        src={banner}
        alt="Banner Image"
        loading="lazy"
        className="inline-block h-full w-screen object-cover object-bottom"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-sm sm:text-lg font-semibold text-gray-600">
          Not sure where to go? Perfect.
        </p>
        <button
          className="inline-block 
          text-center w-full text-purple-500 my-3 bg-white px-10 py-4 shadow-md rounded-lg 
        hover:shadow-xl font-bold  uppercase active:scale-90  transition duration-100 "
        >
          I'm lexible
        </button>
      </div>
    </div>
  );
}
