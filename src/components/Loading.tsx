export default function Loading() {
    return (
        <div className="flex top-0 left-0 h-full w-full z-20 fixed backdrop-blur-sm justify-center items-center">
            <div>
                <div className="z-30 w-14">
                    <div className="loading absolute w-3 h-3 scale-75 ">
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                        <div className="absolute w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}