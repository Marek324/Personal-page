import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContactItemProps {
    name: string;
    link: string;
    icon: IconProp;
}

function ContactItem(props: ContactItemProps) {
    const { name, link, icon } = props;

    return (
        <div className="flex flex-col py-6 px-8">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-center group"
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="text-8xl text-primary group-hover:text-accent transition-colors duration-300"
                />
                <h2 className="">{name}</h2>
            </a>
        </div>
    );
}

export default ContactItem;
