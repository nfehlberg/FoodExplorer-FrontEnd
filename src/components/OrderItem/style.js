import styled from "styled-components";

export const Container = styled.div`
  height: 10rem;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  > div {

    img {
      width: 7.2rem;
      height: 7.2rem;
      border-radius: 50%;

      object-fit: cover;
    }
  }
`

export const Content = styled.div`
  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 2rem;
    }

    strong {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > button {
    margin-top: 1rem;
    border: none;
    background: transparent;
    color: #AB222E;
    font-size: 1.2rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`