

export default function SettingsBlock({title, children}: {
    title: string,
    children: React.ReactNode
}) {
    return (<>
        <div className="bg-[#BDDFFF1F] w-full rounded-md pb-4">
            {/* HEADER */}
            <div className="w-full px-4 py-2 font-bold mb-2">
                {title}
                <hr />
            </div>
            {children}
        </div>
    </>)
}