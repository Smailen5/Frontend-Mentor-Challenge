import { CiCircleAlert } from "react-icons/ci";

export default function ErrorMessage({ children }) {
  return (
    <>
      <CiCircleAlert className="absolute right-0 top-[20%] -translate-y-1/2 text-4xl text-red-500" />
      <p className="text-right text-red-500">{children}</p>
    </>
  );
}
