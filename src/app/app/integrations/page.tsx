import Card from "../card";
import CardTable from "../cardtable";
import InfoBlock from "../infoblock";

export default function IntegrationsPage() {
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

            <div className="mt-5 font-bold">Integrations</div>
            <div className="">General site information</div>

            <CardTable>
                <Card
                    header={"Example Integration"}
                    subheader={<>created <b>Jan 20th</b></>}
                    action={<>
                        <div className="grow rounded-md bg-[#C5180DB5] mx-2 px-[3rem] py-1 text-center my-2 cursor-pointer">
                            Deactivate
                        </div>
                        <div className="grow rounded-md bg-[#B0BAB266] mx-2 px-[3rem] py-1 text-center my-2 cursor-pointer">
                            Manage
                        </div>
                    </>}
                    body={"Some example text about this example integration that describes the examples with an example amount of detail including example features and example benefits."}
                    info={"http://example.com"}
                />
            </CardTable>
        </div>
    </>)
}