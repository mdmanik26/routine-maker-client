

const Faq = () => {
    return (
        <div id="faq" className="space-y-4 px-4 mb-10">
            <h1 className=" text-5xl text-center font-bold text-violet-600 mt-10">FAQ</h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How our app help you?
                </div>
                <div className="collapse-content">
                    <p>With our apps you can create your daily/weekly work routine.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How to download our app?
                </div>
                <div className="collapse-content ">
                    <p>Our apps are now available on both Google Play Store and Apple App Store. You can download and use the one you need.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How can I create a account?
                </div>
                <div className="collapse-content ">
                    <p>You can create an account on this website using either your Google account or email account.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;