import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;

  return (
    <div className="mb-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
            {
             details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-500 font-medium">Read More...</Link> </p> : <p>{details}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
