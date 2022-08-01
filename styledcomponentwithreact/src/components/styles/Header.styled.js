import styled from "styled-components";

/* 2-styledcomponent'te gönderilen propslar asagidaki
   gibi alinir.
*/

export const StyledHeader = styled.header`
  background-color: ${({theme})=> theme.colors.header}; 
  padding: 40px 0;
`;
