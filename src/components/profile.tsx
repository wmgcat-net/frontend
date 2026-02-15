import { MdEmail } from "react-icons/md";
import {
    SiBluesky,
    SiGithub,
    SiMailboxdotorg,
    SiPatreon,
    SiYoutube
} from "react-icons/si";
import { Button, Container, DarkMode, Link } from "@/components";
import imgLogo from "@/png/logo_liquid.png";
import { NavLink } from "react-router-dom";

const Profile: React.FC = () => (
    <div className="flex flex-col gap-3 w-full p-4 text-text dark:text-dark-text">
        <div className="md:sticky md:top-4 w-full">
            <Container>
                <div className="absolute top-0 right-0 m-4">
                    <NavLink to="/subscribe">
                        <Button variant="primary">
                            <SiMailboxdotorg />
                            Subscribe
                        </Button>
                    </NavLink>
                </div>
                <img src={imgLogo} className="w-24"/>
                <p className="text-2xl">wmgcat</p>
                <p className="font-light">Full-Stack Developer. I work on web development and game development, mostly building projects for myself</p>
            </Container>
            <div className="w-full py-4 flex justify-between items-start gap-4 text-outline dark:text-dark-outline">
                <div className="flex gap-4 items-center">
                    <NavLink
                        to="https://github.com/wmgcat-net"
                        target="_blank"
                    >
                        <Button>
                            <SiGithub />
                            Github
                        </Button>
                    </NavLink>
                    <NavLink
                        to="https://dev.wmgcat.net"
                        target="_blank"
                    >
                        <Button>
                            API
                        </Button>
                    </NavLink>
                </div>
                <ul className="flex flex-wrap justify-end gap-4 text-link">
                    <li>
                        <NavLink
                            to="https://bsky.app/profile/wmgcat.bsky.social"
                            target="_blank"
                        >
                            <Button>
                                <SiBluesky />
                                Bluesky
                            </Button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="https://www.youtube.com/@wmgcat"
                            target="_blank"
                        >
                            <Button>
                                <SiYoutube />
                                Youtube
                            </Button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="mailto:support@wmgcat.net"
                            target="_blank"
                        >
                            <Button>
                                <MdEmail />
                                support@wmgcat.net
                            </Button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Profile;