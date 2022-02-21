import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import './Header.css';

export interface Contact {
  displayText: string;
  link?: string;
  icon?: IconProp;
}

export interface HeaderProps {
  name: string;
  contacts: Contact[];
}

const ContactComponent = ({displayText, link, icon}: Contact) => {
  const render = (
      <p className="contact">{displayText} { icon && <FontAwesomeIcon className="icon" icon={icon} />}</p>
  )
  if (link) {
    return <a className="contact" target="_blank" href={link}>{render}</a>
  }
  return render;
}

export const Header = ({name, contacts}: HeaderProps) => (
  <Row as="div" className="header">
    <Col>
      <h1 className="name">{name}</h1>
    </Col>
    <Col as="div" md="auto" className="contact">
      {contacts.map(contact => <ContactComponent {...contact} />)}
    </Col>
  </Row>
)
