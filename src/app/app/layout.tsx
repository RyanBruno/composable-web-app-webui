import Header from "./header";
import SideBar from "./sidebar";


export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (<>
    <div className="w-screen min-h-screen bg-[#060B10]">
        {/* HEADER */}
        <Header />
        
        <div className="flex">
          {/* SIDEBAR */}
          <SideBar />
          {/* MAIN */}
          {children}
        </div>

    </div>
  </>)
  }