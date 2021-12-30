export function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mx-auto text-center bg-slate-100 text-gray-600">
        <section className="space-x-4 sm:text-xs text-slate-800 m-0">
          <div className="flex flex-col gap-1 text-sm">
            <h5 className="font-bold uppercase">About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
          </div>
        </section>
        <section className="space-x-4 sm:text-xs text-slate-800 m-0">
          <div className="flex flex-col gap-1 text-sm">
            <h5 className="font-bold uppercase">Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Referrals accepted</p>
            <p>Black love heart</p>
            <p>How Airbnb works</p>
          </div>
        </section>
        <section className="space-x-4 sm:text-xs text-slate-800 m-0">
          <div className="flex flex-col gap-1 text-sm">
            <h5 className="font-bold uppercase">Host</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
          </div>
        </section>
        <section className="space-x-4 sm:text-xs text-slate-800 m-0">
          <div className="flex flex-col gap-1 text-sm">
            <h5 className="font-bold uppercase cursor-pointer ">Support</h5>
            <p className="cursor-pointer">How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
          </div>
        </section>
      </footer>
    </>
  );
}
