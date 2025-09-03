import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  .contact-wrapper {
    display: flex;
    align-items: center;
    gap: 5rem;
    justify-content: center;
    flex-wrap: wrap;

    .left {
      flex: 1;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        max-width: 500px;
        border-radius: 2rem;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        transition: transform 0.5s ease;

        &:hover {
          transform: scale(1.05) rotate(-1deg);
        }
      }
    }

    .right {
      flex: 1;
      min-width: 320px;

      header {
        text-align: left;
        margin-bottom: 2rem;

        h2 {
          font-size: 3rem;
          color: var(--green);
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;

          &::after {
            content: "";
            display: block;
            width: 0%;
            height: 3px;
            background: var(--pink);
            margin: 0.5rem 0 0;
            transition: width 0.4s ease;
          }

          &:hover::after {
            width: 100%;
          }
        }

        p {
          color: var(--light-gray);
          font-weight: 400;
          margin-top: 0.5rem;
        }
      }

      .contacts {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        margin-bottom: 3rem;

        .card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.8rem 2rem;
          border-radius: 1.4rem;
          background: rgba(30, 30, 30, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;

          &:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 8px 25px rgba(0, 255, 128, 0.3);
            background: linear-gradient(
              135deg,
              rgba(0, 255, 128, 0.1),
              rgba(255, 0, 128, 0.1)
            );
          }

          &::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(135deg, var(--green), var(--pink));
            -webkit-mask: 
              linear-gradient(#000 0 0) content-box,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          &:hover::before {
            opacity: 1;
          }

          .icon img {
            width: 3.8rem;
            transition: transform 0.4s ease;
          }

          &:hover .icon img {
            transform: scale(1.15) rotate(8deg);
          }

          .text {
            font-weight: 500;
            color: #fff;
            transition: color 0.3s ease;
          }

          &:hover .text {
            color: var(--green);
          }
        }
      }
    }
  }

  /* Responsive */
  @media (max-width: 960px) {
    .contact-wrapper {
      flex-direction: column-reverse;
      gap: 3rem;

      .left img {
        max-width: 80%;
      }

      .right {
        text-align: center;

        .contacts .card {
          justify-content: center;
        }
      }
    }
  }
`;
