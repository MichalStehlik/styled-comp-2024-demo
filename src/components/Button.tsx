import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { StyledBox, BoxProps } from './Box';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BoxProps {

}; 

export const StyledButton = styled(StyledBox).attrs({ as: 'button' })
.withConfig({
    shouldForwardProp: (prop) => !['c'].includes(prop),
})<ButtonProps>`
    color: ${(props) => props.c ? props.c : props.theme.color.primary};
    margin: ${(props) => props.theme.spaces.m};

`;


const Button: React.FC<PropsWithChildren<ButtonProps>> = ({children, c, ...props}) => {
  return (
    <StyledButton c={c} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;