export function LargeCard({
  img,
  title,
  description,
  buttonText,
}: {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <article className=" relative px-10 py-16 cursor-pointer ">
      <div className="relative min-w-96 ">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="object-cover object-right-bottom rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 text-slate-500  ">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-slate-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </article>
  );
}
