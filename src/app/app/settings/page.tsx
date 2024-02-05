import InfoBlock from "../infoblock";
import SettingsBlock from "./settingsblock";
import TextSetting from "./textsetting";

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
            <SettingsBlock title={"Site Information"}>
                <TextSetting label={"Site Name"} value={"example-site"} />
                <TextSetting label={"Owner"} value={"Ryan Bruno"} />
            </SettingsBlock>
        </div>

    </>)
}