/* eslint-disable no-unused-vars */
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, auth } from "../Shared/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value


        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Your password must be six character or longer!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return
        }
        else if (!/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Your password must have one Uppercase letter and on special character!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(res => {
                        navigate('/dashboard')

                    })
                    .catch()


            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <div className="max-w-5xl mx-auto border-2 py-4 my-10  px-4 lg:px-20 rounded-lg">
                <h1 className="text-5xl text-center md:text-left text-blue-900 font-bold mb-10">Sign Up</h1>
                <div>
                    <form onSubmit={handleSignUp} className="flex-1">
                        <div className="flex pb-2 gap-1  items-center border-b-2 border-blue-950">
                            <AiOutlineUser className="text-2xl font-bold"></AiOutlineUser>
                            <input className="w-3/4 px-2  focus:outline-none" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className="flex pb-2 gap-1 mt-6  items-center border-b-2 border-blue-950">
                            <BiSolidPhotoAlbum className="text-2xl font-bold"></BiSolidPhotoAlbum>
                            <input className="w-3/4 px-2  focus:outline-none" type="text" name="photo" placeholder="Photo URL" />
                        </div>

                        <div className="flex pb-2 gap-1 mt-6  items-center border-b-2 border-blue-950">
                            <AiOutlineMail className="text-2xl font-bold"></AiOutlineMail>
                            <input className="w-3/4 px-2  focus:outline-none" type="email" name="email" placeholder="Your Email" />
                        </div>

                        <div className="flex pb-2 gap-1 mt-6  items-center border-b-2 border-blue-950">
                            <AiOutlineLock className="text-2xl font-bold"></AiOutlineLock>
                            <input className="w-3/4 px-2  focus:outline-none" type="password" name="password" placeholder="Your Password" />
                        </div>



                        <div className="block md:hidden mt-6">
                            <p className="flex  mx-auto md:mt-6">Already have an account <Link to={'/login'} className="text-blue-600  font-semibold ml-2"> Login</Link></p>
                        </div>
                        <input className="  border border-blue-950 flex items-center text-md font-medium rounded-lg px-4 mt-8 py-2 hover:bg-blue-950 hover:text-white" type="submit" value="Sign Up" />
                    </form>
                    <p className="flex mx-auto md:mt-4">Already have an account <Link to={'/login'} className="text-blue-600  font-semibold ml-2"> Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;