import NewsCard from "../NewsCard/NewsCard";
import { useLoaderData } from "react-router-dom";

const NewsSection = () => {
   const news = useLoaderData();

    return (
        <div>
            <h1 className="text-xl font-semibold">Dragon News Home: {news.length}</h1>
            {
                news.map((item, index) => {
                    return (
                        <NewsCard news={item} key={index}/>
                    )
                })
            }
        </div>
    );
};

export default NewsSection;