import { HiXMark } from "react-icons/hi2";

interface ModalInterface {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeOnOutsideClick?: boolean;
}

export default function Modal({
  children,
  open,
  setOpen,
  closeOnOutsideClick = true,
}: ModalInterface) {
  const handleClose = () => {
    if (closeOnOutsideClick) {
      setOpen(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open
          ? "opacity-100 pointer-events-auto backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
      onClick={handleClose}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className={`transform ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          } transition-all duration-300 bg-white w-fit p-4 rounded-lg shadow-xl`}
        >
          <div className="absolute z-50 top-0 right-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 close-button"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close</span>
              <HiXMark
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
