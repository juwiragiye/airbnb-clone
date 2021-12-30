import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export function Header() {
  return (
    <header className="sticky top-0  z-50 grid grid-cols-3 bg-gray-50 shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-full">
        <img
          className="object-cover object-center h-8 "
          src="https://links.papareact.com/qd3"
          alt=""
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full  py-2 shadow-md ">
        <input
          type="text"
          placeholder="Start your search "
          className="flex-grow text-gray-500 placeholder:text-gray-400 text-sm pl-5  bg-transparent focus:outline-none"
        />
        <SearchIcon className="hidden lg:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2" />
      </div>
      <div className="hidden md:flex items-center space-x-2 justify-end text-gray-500">
        <p className="cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
