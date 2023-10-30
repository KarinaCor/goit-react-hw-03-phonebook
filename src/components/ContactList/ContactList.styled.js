import styled from 'styled-components'

export const List = styled.ul`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
padding: 0;
padding-top: 30px;
`
export const Item = styled.li`
display: flex;
gap: 20px;
justify-content: space-between;
width: 400px;
border-bottom: 1px solid paleturquoise;
`
export const Button = styled.button`
cursor: pointer; 
padding: 10px;
color: white;
background-color: paleturquoise;
border: none;
margin-bottom: 15px;
border-radius: 5px;
font-size: 15px;
`