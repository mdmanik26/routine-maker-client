import { Link } from "react-router-dom";
import Container from "../Shared/Container";

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Container>
                <div className=" flex flex-col lg:flex-row justify-between  items-center  ">
                    <div className="px-4 text-center lg:text-left  flex-1">
                        <h1 className="text-5xl font-bold text-white ">Complete Your Tasks</h1>
                        <p className="text-center lg:text-justify text-lg text-white font-semibold mt-3 max-w-[500px] ">Create daily/weekly work routines with us to organize all your tasks and complete them within a specific time frame.</p>
                        <Link to={'/login'}>                        <button className="btn btn-outline bg-fuchsia-500 outline-none mt-4 px-6 text-white ">Let`s Explore</button></Link>
                    </div>

                    <div className=" flex justify-center items-center flex-1 ">
                        <img className="w-3/4" src="https://i.ibb.co/ySwJbR3/banner-Img.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;