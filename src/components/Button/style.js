import styled from 'styled-components';

export const Container = styled.button `
width: 100%;
background-color: ${({theme})=> theme.COLORS.RED};
color: ${({theme})=> theme.COLORS.WHITE};

font-size: 1.4rem;
height: 4.8rem;
border: none;
border-radius: 0.8rem;

align-items: center;
justify-content: center;
gap: 1.1rem;

display: ${({ isInvisible}) => isInvisible ? 'none': 'flex'};


&:disabled{
  opacity:0.5;
  cursor: not-allowed;
}

`
