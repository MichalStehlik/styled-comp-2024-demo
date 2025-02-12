import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Box, { StyledBox, BoxProps } from './Box';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BoxProps {

}; 

export const StyledButton = styled(StyledBox).attrs({ as: 'button' })
.withConfig({
    shouldForwardProp: (prop) => !['c'].includes(prop),
})<ButtonProps>`
    color: ${(props) => props.c || '#000'};
`;


const Button: React.FC<PropsWithChildren<ButtonProps>> = ({children, c, ...props}) => {
  return (
    <StyledButton c={c} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;