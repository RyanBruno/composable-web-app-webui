import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({
    header,
    subheader,
    action,
    info,
    body,
  }: {
    header: React.ReactNode,
    subheader: React.ReactNode,
    action: React.ReactNode,
    info: string,
    body: string,
  }) {
    return (<>
        <div className="bg-[#181E24] w-full p-4 rounded-md cursor-pointer my-2">
            <div className="w-full h-full flex">
                <div className="h-[3rem] aspect-square rounded-full bg-[#6BB7FD]">

                </div>
                <div className="grow mx-3 min-w-[10rem]">
                    <div className="font-bold">
                        {header}
                    </div>
                    <div className="text-[#FFFFFF8F]">
                        {subheader}
                    </div>
                </div>
                {info ? (<>
                    <div className="h-[3rem]">
                        <FontAwesomeIcon className="aspect-square" style={{height: "50%"}} icon={faCircleInfo} />
                    </div>
                </>): <></>}

                {info || body ? <></> : (<>
                    <div className="flex min-w-[15rem]">
                        {action}
                    </div>
                </>)}

            </div>

            {body ? (<div className="mt-2 px-2">
                {body}
            </div>):<></>}

            {info || body ? (<>
                <div className="flex mt-4 w-full">
                    {action}
                </div>
            </>): <></>}
        </div>
    </>)
  }