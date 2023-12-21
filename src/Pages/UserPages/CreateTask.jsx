import { useForm } from "react-hook-form";


const CreateTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)

    }


    return (

        <div className="py-10 px-4">
            <h1 className="text-center font-bold text-5xl my-10">Create New Task</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-slate-100 ">

                <div className="flex justify-between items-center gap-6">
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Title</p>
                        <input {...register("title", { required: true })} required className="rounded-lg  w-full py-2 px-3" type="text" name="title" placeholder="Title" /> <br />
                        {errors.title && <span className="text-red-600">Title is required</span>}
                    </div>
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Description</p>
                        <input {...register("description", { required: true })} required className="rounded-lg  w-full py-2 px-3" type="text" name="description" placeholder="Description" /> <br />
                        {errors.description && <span className="text-red-600">Title is required</span>}
                    </div>
                </div>

                <div className="flex justify-between items-center gap-6 mt-4">
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Deadline</p>
                        <input {...register("deadline", { required: true })} required className="rounded-lg  w-full py-2 px-3" type="date" name="deadline" placeholder="deadline" /> <br />
                       
                    </div>
                    <div className="flex-1">
                        <p className="mb-2 text-xl font-medium text-gray-500">Priority</p>

                        <select {...register("priority", { required: true })} required name="priority" className="w-full py-2 rounded-lg px-4">
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

export default CreateTask;