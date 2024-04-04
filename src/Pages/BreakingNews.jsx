const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">BreakingNews</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to='/' className="mr-12">I can be a React component.....</Link>
        <Link to='/' className="mr-12">multiple React components...</Link>
        <Link to='/' className="mr-12">just some
        text....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
import Marquee from "react-fast-marquee";import { Link } from "react-router-dom";

