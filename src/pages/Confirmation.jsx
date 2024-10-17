import { useNavigate } from "react-router";
import confirmation from "../assets/confirmation.webp";
function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[57vh]">
      <div className="w-1/2 flex justify-center items-center">
        <img src={confirmation} width={500} alt="" />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <h1 className="text-4xl">
          THANK YOU <span className="text-red-300">CHEF</span>
        </h1>
        <p className="text-gray-500 mt-5">
          Thanks for choosing and contributing in PERFECT RECIPE platform.We are
          looking forward to make a community and connect the ethusiasts
          together around the world through this single platform
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-700 text-primary-foreground hover:bg-red-500/90 px-6 py-3 mt-10 rounded-md font-semibold transition duration-300"
        >
          Go To HomePage
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
