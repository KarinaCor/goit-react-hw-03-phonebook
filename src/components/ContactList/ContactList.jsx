import * as SC from '../ContactList/ContactList.styled'

export const ContactList = ({ contacts, handleDelete }) => {
    return (
<SC.List>
{contacts.map(({id, name, number}) => (
    <SC.Item key={id}>
        {name}: {number}
        <SC.Button onClick={() => handleDelete(id)}>Delete</SC.Button>
    </SC.Item>
    ))}
</SC.List>
    )
}