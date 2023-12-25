
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const data = useLoaderData()
    console.log(data);
    const {_id, title, description, deadline, priority} = data;

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const deadline = form.deadline.value
        const priority = form.priority.value
    
        const updateTodo = { title, description, deadline, priority }

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updateTodo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }




    return (
        <div className="py-10 px-4">
            <h1 className="text-center font-bold text-5xl my-10">Update Your Task</h1>
            <form onSubmit={handleUpdate} className="p-3 bg-slate-100 ">

                <div className="flex justify-between items-center gap-6">
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Title</p>
                        <input defaultValue={title} required className="rounded-lg  w-full py-2 px-3" type="text" name="title" placeholder="Title" /> <br />

                    </div>
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Description</p>
                        <input defaultValue={description} required className="rounded-lg  w-full py-2 px-3" type="text" name="description" placeholder="Description" /> <br />

                    </div>
                </div>

                <div className="flex justify-between items-center gap-6 mt-4">
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Deadline</p>
                        <input defaultValue={deadline} required className="rounded-lg  w-full py-2 px-3" type="date" name="deadline" placeholder="deadline" /> <br />

                    </div>
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Priority</p>

                        <select defaultValue={priority} required name="priority" className="w-full py-2 rounded-lg px-4">
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>

                        <br />

                    </div>
                </div>

                <input className='btn bg-violet-600 w-full mt-4 text-white' type="submit" name="" value="Create Task" />
            </form>
        </div>
    );
};

export default Update;