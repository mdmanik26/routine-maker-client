

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToDo = () => {

    const { user } = useContext(AuthContext)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`https://job-task-server-alpha-five.vercel.app/todos/${user?.email}`)
            .then(res => res.json())
            .then(data => setTodos(data))

    }, [user])

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete the task!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://job-task-server-alpha-five.vercel.app/todos/${_id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'You have deleted the task successfully.',
                                    'success'
                                )
                            }

                            const remaining = todos.filter(todo => todo._id !== _id)
                            setTodos(remaining)
                        })

                }
            })

    }


    console.log(todos);
    return (
        <div>
            <h1 className="text-5xl font-bold text-violet-500 text-center">All Tasks</h1>
            <div className="grid grid-cols-3 gap-4 m-2 ">

                <div className="rounded-lg border-2 border-violet-600 min-h-[400px]">
                    <p className="text-center bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white py-3 text-2xl font-bold">To-Do</p>
                    <div className="px-3 py-4">
                        {
                            todos?.map(item =>
                                
                                <div  key={item._id} className=" space-y-2 rounded-lg text-white px-4 py-2 bg-gradient-to-b from-violet-600 to-fuchsia-500 mb-4">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <div className="flex items-center gap-4">
                                                <p>{item.title}</p>
                                                <p>{item.deadline}</p>
                                            </div>
                                            <p className="">{item.description}</p>
                                        </div>
                                        <div className="flex justify-between items-center gap-4 text-xl">
                                            <MdDeleteForever onClick={() => handleDelete(item?._id)}></MdDeleteForever>
                                            <Link to={`/dashboard/update/${item?._id}`}><FaEdit></FaEdit></Link>
                                        </div>
                                    </div>
                                </div>










                            )
                        }
                    </div>


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