import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import RightSideNav from "../Shared/RightSideNavbar/RightSideNav";
import Navbar from "../Shared/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 p-4">
          <h1 className="text-xl font-semibold">Hi</h1>
          <p>{id}</p>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
