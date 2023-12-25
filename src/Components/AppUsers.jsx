

const AppUsers = () => {
    return (
        <div className="my-10" id="users">
            <h1 className=" my-10 text-5xl font-bold text-center text-violet-500">Who use's Our App</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div className="rounded-lg shadow-lg px-5 pb-5">
            <img src="https://i.ibb.co/sygbdTp/banker.jpg" alt="" className="h-[194px] w-full rounded-lg" />
            <p className=" font-semibold text-2xl text-center">Banker</p>
            <p className=" font-semibold text-center">A Banker uses this app Because In this app he can manage his all routine for a day.</p>
        </div>

        <div className="rounded-lg shadow-lg px-5 pb-5">
            <img src="https://i.ibb.co/VVRRqmQ/dev.jpg" alt="" className="h-[194px] w-full rounded-lg" />
            <p className=" font-semibold text-2xl text-center">Developer</p>
            <p className=" font-semibold text-center">A Developer uses this app Because In this app he can manage his all routine for a day.</p>
        </div>

        <div className="rounded-lg shadow-lg px-5 pb-5">
            <img src="https://i.ibb.co/4dRWH2w/politician.jpg" alt="" className="h-[194px] w-full rounded-lg" />
            <p className=" font-semibold text-2xl text-center">Politician</p>
            <p className=" font-semibold text-center">A Politician uses this app Because In this app he can manage his all routine for a day.</p>
        </div>
       </div>
       
        </div>
    );
};

export default AppUsers;