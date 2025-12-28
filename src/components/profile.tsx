import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";
import {
    SiBluesky,
    SiGithub,
    SiPatreon,
    SiYoutube
} from "react-icons/si";
import { DarkMode, Link } from "@/components";
import imgLogo from "@/png/logo.png";

const Profile: React.FC = () => (
    <div className="md:sticky md:top-4 flex flex-col gap-3 max-w-xl max-md:max-w-full p-4 text-text dark:text-dark-text">
        <div className="md:sticky md:top-4">
            <div className="relative flex flex-col border border-outline dark:border-dark-outline bg-block dark:bg-dark-block p-4 rounded-2xl gap-2">
                <div className="absolute top-0 right-0 m-4 text-black dark:text-white border-black dark:border-white">
                    <Link
                        label="Patreon"
                        href="https://www.patreon.com/c/wmgcat"
                        bordered
                        Icon={SiPatreon}
                    />
                </div>
                <img src={imgLogo} className="w-24"/>
                <p className="text-2xl">wmgcat</p>
                <p className="font-light">Full-Stack Developer. I work on web development and game development, mostly building projects for myself</p>
                <ul className="flex flex-col gap-1 text-link">
                    <li>
                        <Link
                            label="Bluesky"
                            href="https://bsky.app/profile/wmgcat.net"
                            Icon={SiBluesky}
                        />
                    </li>
                    <li>
                        <Link
                            label="Youtube"
                            href="https://www.youtube.com/@wmgcat"
                            Icon={SiYoutube}
                        />
                    </li>
                    <li>
                        <Link
                            label="support@wmgcat.net"
                            href="mailto:support@wmgcat.net"
                            Icon={MdEmail}
                        />
                    </li>
                </ul>
            </div>
            <div className="py-4 flex justify-between items-center px-4 gap-4 text-outline dark:text-dark-outline">
                <div className="flex gap-4 items-center">
                    <Link
                        label="Github"
                        href="https://github.com/wmgcat-net"
                        Icon={SiGithub}
                    />
                    <Link
                        label="API"
                        href="https://dev.wmgcat.net"
                    />
                </div>
                <DarkMode />
            </div>
        </div>
    </div>
)

export default Profile;