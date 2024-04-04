import BreakingNews from "./BreakingNews";
import NewsSection from "./NewsSection/NewsSection";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNavBar/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNavbar/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2">
                   <NewsSection></NewsSection>
                </div>
                <div className=" col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;