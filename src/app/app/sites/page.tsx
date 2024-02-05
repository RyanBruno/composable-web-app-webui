import Card from "../card";
import CardTable from "../cardtable";
import InfoBlock from "../infoblock";

export default function SettingsPage() {
    const url = "https://example-site.example.com";
    const siteName = "examples-site";
    const owner = "Ryan Bruno";
    const updated = "Jan 31 (a day ago)";
    return (<>
        <div className="py-4 px-6 w-full min-h-screen">
            <InfoBlock>
                <b>Configure your site</b> {siteName}<br/>
                <u>{url}</u><br/>
                Owned by {owner}<br/>
                Last updated {updated}
            </InfoBlock>

            <div className="mt-5 font-bold">Site Details</div>
            <div className="">General site information</div>

            <CardTable>
                <Card
                    header={"example-site"}
                    subheader={<>created <b>Jan 20th</b></>}
                    action={
                        <div className="rounded-md bg-[#0DC535B5] px-[5rem] py-1 text-center my-2 cursor-pointer">
                            Open Site
                        </div>
                    }
                />
                <Card
                    header={"example-site"}
                    subheader={<>created <b>Jan 20th</b></>}
                    action={
                        <div className="rounded-md bg-[#0DC535B5] px-[5rem] py-1 text-center my-2 cursor-pointer">
                            Open Site
                        </div>
                    }
                />

            </CardTable>
        </div>
    </>)
}