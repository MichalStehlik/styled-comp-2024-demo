import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export type BoxProps = {
    c?: string; // color
}; 

export const StyledBox = styled.div.withConfig({
    shouldForwardProp: (prop) => !['c'].includes(prop),
})<BoxProps>`
    margin: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid green;
    border-radius: 5px;
    color: ${(props) => props.c || '#000'};
`;


const Box: React.FC<PropsWithChildren<BoxProps>> = ({children, c}) => {
  return (
    <StyledBox c={c}>
      {children}
    </StyledBox>
  );
};

export default Box;