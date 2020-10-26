import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if(contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  if(filtered !== null) {
    return (
      <Fragment>
        <TransitionGroup>
          {filtered.map(contact => (
            <CSSTransition key={contact._id} timeout={800} classNames="item" >
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <TransitionGroup>
          {contacts.map(contact => (
            <CSSTransition  key={contact._id} timeout={800} classNames="item" >
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Fragment>
    )
  }
}

export default Contacts
