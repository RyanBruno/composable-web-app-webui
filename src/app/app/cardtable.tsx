
export default function CardTable({children}: {
    children: React.ReactNode
}) {
    return (<>
        <div className="bg-[#BDDFFF1F] w-full rounded-md px-4 py-2 ">
            <input type="text" className="rounded-md border border-[#AAAAAA] w-full bg-transparent px-2 py-1 text-center"
                placeholder="Search"
            />
            <div className="rounded-md w-full bg-[#0DC535B5] px-2 py-1 text-center my-2 cursor-pointer">
                Add a Site
            </div>
            <div className="flex w-[40%] mx-auto">
                <div className="mx-1">
                    Type:
                </div>
                <div className="mx-1 font-bold">
                    All
                </div>
                <div className="grow"></div>
                <div className="mx-1">
                    Plan:
                </div>
                <div className="mx-1 font-bold">
                    All
                </div>
            </div>
            <div className="rounded-md w-full bg-[#B0BAB266] px-2 py-1 text-center my-2 cursor-pointer">
                Edit Filters
            </div>
            {children}

        </div>
    </>)
}