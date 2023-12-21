

const MobileApp = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-violet-600 text-center my-10 " >Use Our Mobile App</h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between  items-center  ">



                <div className="px-4 text-center lg:text-left  flex-1">
                    <h1 className="text-5xl font-bold text-violet-600 ">Download our app to Save your time</h1>
                    <p className="text-center lg:text-justify text-lg text-slate-600 font-semibold mt-3 lg:max-w-[500px] ">Now available to download from both the App Store and Google Play Store.</p>
                    <div>
                        <button className="btn btn-outline bg-violet-600 outline-none mt-4 px-6 text-white ">Google Play</button>
                        <button className="btn btn-outline bg-violet-600 outline-none mt-4 px-6 text-white ">App Store</button>
                    </div>
                </div>

                <div className=" flex justify-center items-center flex-1 ">
                    <img className="w-3/4" src="https://i.ibb.co/gdwJV42/app-download.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;