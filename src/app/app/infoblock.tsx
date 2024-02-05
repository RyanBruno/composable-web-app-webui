
export default function InfoBlock({children}: {
    children: React.ReactNode
}) {
  return (<>
  <div className="bg-[#BDDFFF1F] w-full px-4 py-2 rounded-md">
    {children}
  </div>
  </>)
}