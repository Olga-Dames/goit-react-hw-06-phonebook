import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Heading, Title, Empty } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <Empty>Your phonebook is empty</Empty>}
    </Container>
  );
}
