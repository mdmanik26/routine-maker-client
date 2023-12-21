
const Package = () => {
    return (
        <div className="my-10">
            <h1 className="text-5xl font-bold text-center mx-auto mb-16 max-w-[1000px] text-violet-600 ">Make your Routine more easier</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-20 md:px-4 lg:px-20 gap-10">

                <div className="rounded-lg border border-violet-600 px-4 py-6 space-y-3">
                    <p className="text-xl text-fuchsia-500 font-bold">FREE</p>
                    <p>$<span className="font-bold text-5xl">0</span></p>
                    <p>/month billed annually</p>
                    <p>$ 0 billed monthly</p>
                    <button className="btn btn-outline text-white bg-violet-600 w-full">Get Started</button>
                </div>
                <div className="max-h-[270px] rounded-lg border-2 border-fuchsia-500 px-4 py-6 space-y-3 lg:-mt-6">
                    <p className="text-xl text-fuchsia-500 font-bold">PREMIUM</p>
                    <p>$<span className="font-bold text-5xl">119</span></p>
                    <p>/month billed annually</p>
                    <p>$ 119 billed monthly</p>
                    <button className="btn btn-outline text-white  bg-fuchsia-500 w-full">Get Started</button>
                </div>
                <div className="rounded-lg border border-violet-600 px-4 py-6 space-y-3">
                    <p className="text-xl text-fuchsia-500 font-bold">ENTERPRISE</p>
                    <p>$<span className="font-bold text-5xl">199</span></p>
                    <p>/month billed annually</p>
                    <p>$ 199 billed monthly</p>
                    <button className="btn btn-outline text-white bg-violet-600 w-full">Get Started</button>
                </div>


            </div>
        </div>
    );
};

export default Package;