

const ToDo = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-violet-500 text-center">All Tasks</h1>
            <div className="grid grid-cols-3 gap-4 m-2 ">
           <div className="rounded-lg border-2 border-violet-600 min-h-[400px]">
            <p className="text-center bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white py-3 text-2xl font-bold">To-Do</p>
           </div>

           <div className="rounded-lg border-2 border-violet-600 min-h-[400px]">
            <p className="text-center bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white py-3 text-2xl font-bold">Ongoing</p>
           </div>

           <div className="rounded-lg border-2 border-violet-600 min-h-[400px]">
            <p className="text-center bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white py-3 text-2xl font-bold">Completed</p>
           </div>
        </div>
        </div>
    );
};

export default ToDo;