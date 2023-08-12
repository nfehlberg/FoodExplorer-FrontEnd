import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  border: 1px solid var(--dark-dark-300, #000204);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  flex: none;


  .ingredients {
    margin-top: 1rem;
    display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  
  }


  > button:first-child {
    display: flex;
    position: absolute;
    top: 2.1rem;
    right: 2.1rem;
    
    background: none;
    border: none;

    svg {
      fill: ${({ theme, isFavorite }) => isFavorite ? theme.COLORS.RED : theme.COLORS.WHITE};
    }
  }

  > div:nth-child(2) {
    width: 17.6rem;
    height: 17.6rem;
    img {
      width: 100%;
    }
    
  }

  > a {
    h3 {
    margin-top: 1.6rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    }
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    padding-inline: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

 > footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.8rem;
  }

  > strong {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
    margin-block: 1.6rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.7rem;
    width: 22rem;

    position: relative;
    z-index: 10;

    span {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    .btn {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};

      display: flex;
      align-items: center;

      position: relative;

      z-index: 6;
    }

  }
`