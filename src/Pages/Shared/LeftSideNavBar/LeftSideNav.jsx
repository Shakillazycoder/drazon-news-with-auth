import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <div>
      <div className="p-4 space-y-8">
        <h1 className="text-xl font-semibold">All Category: {category.length}</h1>
        {category.map((item, index) => {
          return (
            <li className="block ml-4 text-xl font-medium" key={index}>
              <NavLink to={`/category/${item.id}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </div>
      {/* card section */}
      <div className="space-y-5">
        {/* card -1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="img1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions">
              <p>Sports</p>
              <p className="flex items-center gap-2">
                <CiCalendar />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
        {/* card -2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="img1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions">
              <p>Sports</p>
              <p className="flex items-center gap-2">
                <CiCalendar />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
        {/* card -3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="img1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions">
              <p>Sports</p>
              <p className="flex items-center gap-2">
                <CiCalendar />
                {moment().format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { CiCalendar } from "react-icons/ci";import moment from "moment";

