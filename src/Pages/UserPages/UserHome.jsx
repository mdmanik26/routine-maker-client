

const UserHome = () => {
    return (
        <div>
        <h1 className="text-3xl font-bold text-center my-3">All Tasks</h1>
        <div className=" max-w-[800px] mx-auto grid grid-cols-3 gap-4 text-white">
            <div className="text-center border rounded-lg px-4 bg-gradient-to-b from-violet-600 to-fuchsia-500 py-3">
                <h1 className="text-2xl font-bold ">To-Do </h1>
                <p className="text-5xl font-bold">40</p>

            </div>
            <div className="text-center border rounded-lg px-4 bg-gradient-to-b from-violet-600 to-fuchsia-500 py-3">
                <h1 className="text-2xl font-bold ">Ongoing</h1>
                <p className="text-5xl font-bold">23</p>

            </div>
            <div className="text-center border rounded-lg px-4 bg-gradient-to-b from-violet-600 to-fuchsia-500 py-3">
                <h1 className="text-2xl font-bold ">Completed</h1>
                <p className="text-5xl font-bold">3</p>
            </div>
        </div>
    </div>
    );
};

export default UserHome;