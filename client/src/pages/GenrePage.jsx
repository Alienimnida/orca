import React from "react";

const GenrePage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen font-orka bg-[#9dc7e2]">
                <h1 className="text-5xl italic font-bold text-violet-950 mb-8">Explore Different Music Genres</h1>
                <div className="flex flex-row justify-center">
                    <div className="w-44 h-72 bg-gray-200 rounded-2xl m-4 font-bold border-2 border-violet-800 hover:transform hover:scale-125 transition-transform">
                        <img className="rounded-2xl" src="https://media.istockphoto.com/id/1367926307/photo/concert-view-of-a-saxophone-player-with-vocalist-and-musical-jazz-band-in-the-background.jpg?s=612x612&w=0&k=20&c=kHKSw6DpApC9-3Do0ntxTh1ZfWd6WeuD9v9TtBPfsxU=" alt="JAZZ" />
                        JAZZ
                    </div>
                    <div className="w-44 h-72 font-bold bg-gray-200 rounded-2xl m-4 border-2 border-violet-800 hover:transform hover:scale-125 transition-transform">
                        <img className="rounded-2xl" src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-02/11/full/1644572305-6425.jpg" alt="INDIAN CLASSICAL" />
                        INDIAN CLASSICAL
                    </div>
                    <div className="w-44 h-72 font-bold bg-gray-200 rounded-2xl m-4 border-2 border-violet-800 hover:transform hover:scale-125 transition-transform">
                        <img className="rounded-2xl" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?cs=srgb&dl=pexels-pixabay-164693.jpg&fm=jpg" alt="ROCK" />
                        ROCK
                    </div>
                    <div className="w-44 h-72 font-bold bg-gray-200 rounded-2xl m-4 border-2 border-violet-800 hover:transform hover:scale-125 transition-transform">
                        <img className="rounded-2xl" src="https://play-lh.googleusercontent.com/JpdeHAd9gPX17tKk3FuVmUTVK_nDiegf7Fdgwd8wtr-vWHyUqfCnCXRTBGkK6-fCVKtx" alt="POP" />
                        POP
                    </div>
                    <div className="w-44 h-72 bg-gray-200 font-bold rounded-2xl m-4 border-2 border-violet-800 hover:transform hover:scale-125 transition-transform">
                        <img className="rounded-2xl" src="https://erp.aipamusic.com/Upload/WebsiteManagement/blog_banner_ad22ad1b-d7f4-43f9-a.png" alt="FOLKLORE" />
                        FOLKLORE
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenrePage;
