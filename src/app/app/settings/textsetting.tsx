import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextSetting({label, value}: {
    label: string,
    value: string,
}) {
    return (<>
        <div className="w-full flex px-4 odd:bg-[#2F3843]">
            <div className="w-[40%]">
                {label}:
            </div>
            <div className="font-bold grow">
                {value}
            </div>
            <div className="px-2 cursor-pointer">
                <FontAwesomeIcon icon={faPencil} />
            </div>
        </div>
    </>)
}