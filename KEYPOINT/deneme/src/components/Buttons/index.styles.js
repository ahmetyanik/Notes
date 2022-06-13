import styled,{keyframes} from "styled-components";

const rotate = keyframes`

from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}

`

export const StyledButton = styled.button`

height: 12.5rem;
width: 18.75rem;
color: ${props=>props.color};
background-color: ${props=>props.backgroundColor};
animation: ${rotate} 5s infinite; 

.deneme{

    border-radius: 5px solid red;
}

`
