import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  /* Default Dark Theme Variables */
  --text-color: #ffffff;
  --light-gray: #cccccc;
  --input-bg: #747474;
    --input-border: #ffffff;

  color: var(--text-color);
  transition: all 0.5s ease;

  h2 {
    text-align: center;
    margin-bottom: 2rem;color: var(--light-gray);
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: 1px solid var(--input-border);
      background-color: var(--input-bg);
      color: var(--text-color);
      font-weight: 600;
      transition: all 0.4s ease;

      &::placeholder {
        color: var(--light-gray);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
      background-color: var(--text-color);
      color: var(--bg-color);
      border: none;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  /* Light Mode */
  &.light {
    --bg-color: #f5f5f5;
    --text-color: #212121;
    --light-gray: #555555;
    --input-bg: #ffffff;
    --input-border: #212121;
  }

  @media (max-width: 740px) {
    form {
      width: 100%;
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--text-color);
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  /* Light Mode */
  &.light {
    --bg-color: #f5f5f5;
    --text-color: #212121;
  }
`;
