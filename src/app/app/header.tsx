import { faChevronDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SitePicker from "./sitepicker";

export default function Header() {
    const logo = "url('/vercel.svg')";

    return (<>
        <div className="sticky top-0 w-full h-[63px] border-b border-[#545454] flex p-[10px] bg-[#060B10] z-10">
            {/* LOGO */}
            <div className="h-full aspect-square rounded-md cursor-pointer hover:bg-[#6BB7FD47] flex justify-center items-center">
                <div className="h-[85%] w-[85%] bg-no-repeat bg-cover "
                    style={{backgroundImage: logo}}
                >
                </div>
            </div>
            {/* DIVIDER */}
            <div className="text-slate-300 text-[2rem] align-self-center mx-[10px]">
                /
            </div>
            {/* SELECTOR */}
            <SitePicker />
            {/* SPACER */}
            <div className="h-1 grow">
            </div>
            {/* SPACER */}
            <div className="h-full aspect-square rounded-full cursor-pointer hover:bg-[#6BB7FD47] flex justify-center items-center">
                <div className="h-[85%] w-[85%]">
                    <FontAwesomeIcon className="h-full w-full" style={{height: "100%"}} icon={faUserCircle} />
                </div>
            </div>
        </div>
    </>)
}