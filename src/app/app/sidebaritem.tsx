import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarItem(props: {
    icon: IconProp,
    label: string,
}) {
    return (<>
        <div className="h-[40px] w-[80%] hover:bg-[#6BB7FD47] rounded-md mx-auto my-2 flex items-center cursor-pointer">
            <div className="mx-2">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className="text-xl">
                {props.label}
            </div>
        </div>
    </>)
}