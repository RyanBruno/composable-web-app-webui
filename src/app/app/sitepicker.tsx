import { faChevronDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SitePicker() {
    const text = "Select a site";

    return (<>
        {/* SELECTOR */}
        <div className="h-full rounded-md cursor-pointer hover:bg-[#6BB7FD47] flex justify-center items-center px-2">
            <div className="text-xl">
                {text}
            </div>
            <div className="mx-2">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    </>)
}