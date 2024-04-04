const RightSideNav = () => {
  return (
    <div>
        <div className="p-4 mb-5">
      <h1 className="text-2xl font-semibold mb-5">Login With</h1>
      <div>
        <button className="btn btn-outline w-full mb-2">
          <FaGoogle />
          Google
        </button>
      </div>
      <div>
        <button className="btn btn-outline w-full">
          <FaGithub />
          GitHub
        </button>
      </div>
    </div>
    <div>
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-5">Find Us On</h1>
            <div>
                <a className="flex items-center gap-2 rounded-t-lg border p-3" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> facebook
                </a>
                <a className="flex items-center gap-2 border-x p-3" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare /> instagram

                </a>
                <a className="flex items-center gap-2 rounded-b-lg border p-3" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> twitter
                </a>
            </div>
        </div>
    </div>
    <div className="p-4 bg-[#F3F3F3]">
        <h1 className="text-3xl font-semibold mb-5">Q-Zone</h1>
        <div className="mb-5">
            <img src={qZone1} alt="" />
        </div>
        <div className="mb-5">
            <img src={qZone2} alt="" />
        </div>
        <div className="mb-5">
            <img src={qZone3} alt="" />
        </div>
    </div>
    </div>
  );
};

export default RightSideNav;
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"



