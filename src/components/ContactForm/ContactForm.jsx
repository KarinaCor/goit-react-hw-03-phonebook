import { Component} from 'react';
import * as SC from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, number} = this.state;
        this.props.handleAddContact({name, number});
        this.setState({name: '', number: ''});
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }

    render(){
        return(
            <SC.Form onSubmit={this.handleSubmit}>  
            <SC.Label> 
                Name
                <SC.Input 
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required/> 
            </SC.Label>
            <SC.Label> 
                Number
                <SC.Input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                required/> 
            </SC.Label>
            <SC.Button type='submit'>Add contact</SC.Button>
            </SC.Form>
        )
    }
    

    
}

