import { NavLink, Outlet } from "react-router-dom";
import Container from "../Shared/Container";
import { FaHome, FaDashcube, FaListOl, } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
const Dashboard = () => {
    const {user} = useContext(AuthContext)
   
   
    return (
        <Container>
            <div className="flex ">
                <div className="w-[270px] min-h-[800px] bg-gradient-to-b from-violet-600 to-violet-500 text-white">
                    <div className="" >
                         
                        <img className="h-20 w-20 mx-auto mt-4 rounded-full border-2 border-white" src={user?.photoURL} alt="" />
                    </div>
                    <ul className="menu text-xl p-3">

                            <>
                                <li className="text-md">
                                    <NavLink to={'/dashboard/createTask'}>
                                        <IoCreateOutline></IoCreateOutline>
                                        Create New Task</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/toDo'}>
                                        <FaListOl></FaListOl>
                                        To-Do List</NavLink>
                                </li>
                            

                            </>
                        <div className="divider"></div>
                        <li>
                            <NavLink to={'/'}>
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>


                    </ul>
                </div>

                <div className="flex-1">
                    <div className="flex gap-2 items-center text-white font-bold text-2xl text-center bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 px-10">
                        <FaDashcube></FaDashcube>
                        <h1>Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Dashboard;