import * as React from "react";
import ScreenTop from "../../utils/ScreenTop";
import { Container } from "@material-ui/core";
import contacts from "../../../informations/contacts";
import ContactItem from "./ContactItem";

const Contact: React.FC = () => {
  const contactItems = contacts.map(contact => <ContactItem {...contact} />)

  return(
    <div className={""}>
      <ScreenTop title="Contact" />
      <Container maxWidth="md">
        {contactItems}
      </Container>
    </div>
  )
}

export default Contact;
