import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter,  } from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@material-ui/core";

interface Props {
  iconName: string;
  kind: string
  url: string;
}

const ContactItem: React.FC<Props> = ( props ) => {
  const { iconName, kind, url } = props;
  const icon = sortIcons(iconName)
  return(
    <div>
      <FontAwesomeIcon icon={icon} size="5x" />
      <Typography variant="h5"  >
        {kind}
      </Typography>
    </div>
  )
}

const sortIcons = (name: string) => {
  switch(name) {
    case "github":
      return faGithub;
    case "mail":
      return faEnvelopeOpenText;
    default:
      return faTwitter;
  }
}

export default ContactItem;
