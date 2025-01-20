import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.svg';
import { IoMdAdd, IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white">
      <div className="flex flex-grow items-center justify-between px-9 py-4 ">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <h1 className="text-title-lg font-medium text-main ">
            {pathname.slice(1)}
          </h1>
        </div>

        <div className="flex gap-2">
          {pathname === '/projects' && (
            <button className="bg-primary flex items-center gap-2 px-5 text-sm font-medium text-white border border-gray-100 rounded-full hover:bg-blue-600 focus:outline-none">
              <span>New project</span>
              <IoMdAdd size={16} className="text-white" />
            </button>
          )}

          <IoMdNotificationsOutline
            size={44}
            className="text-main p-3 border-2 rounded-full border-gray-100"
          />
          <IoMdSearch
            size={44}
            className="text-main p-3 border-2 rounded-full border-gray-100"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
