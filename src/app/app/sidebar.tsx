import { faCog, faHouse, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "./sidebaritem";


export default function SideBar() {
    return (<>
        <div className="sticky top-0 h-screen w-[324px] border-r border-[#545454]">
            <SideBarItem label={"Home"} icon={faHouse} />
            <SideBarItem label={"Sites"} icon={faWindowRestore} />
            <SideBarItem label={"Settings"} icon={faCog} />
        </div>
    </>)
}