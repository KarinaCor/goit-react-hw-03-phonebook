import * as SC from '../Filter/Filter.styled'

export const Filter = ({value, filterContacts}) => {
    return(
<SC.Wrapper>  
<SC.Label> 
Find contacts by name
<SC.Input  
type="text"
name="filter"
value={value}
onChange={filterContacts}/>
 </SC.Label>
</SC.Wrapper>
    )
}