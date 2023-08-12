import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-width: 42.8rem;
  height: 12.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  margin-top: 10rem;
`

export const Content = styled.div`
  height: 100%;
  max-width: 136.8rem;
  margin-inline: auto;
  padding-inline: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    span {
      font-size: 2.4rem;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > p {
    font-size: clamp(1.2rem, 1rem + 5vw, 1.4rem);
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  
  `