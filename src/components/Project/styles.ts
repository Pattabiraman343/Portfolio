import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }.projects {
        .project:nth-child(1) {
          background: linear-gradient(135deg, #ff9a9e, #fad0c4); /* pink */
        }
        .project:nth-child(2) {
          background: linear-gradient(135deg, #a18cd1, #fbc2eb); /* purple */
        }
        .project:nth-child(3) {
          background: linear-gradient(135deg, #f6d365, #fda085); /* orange */
        }
        .project:nth-child(4) {
          background: linear-gradient(135deg, #84fab0, #8fd3f4); /* green-blue */
        }
        .project:nth-child(5) {
          background: linear-gradient(135deg, #f093fb, #f5576c); /* pink-purple */
        }
        .project:nth-child(6) {
          background: linear-gradient(135deg, #4facfe, #00f2fe); /* blue */
        }
        .project:nth-child(7) {
          background: linear-gradient(135deg, #43e97b, #38f9d7); /* green */
        }
      }
      

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;  font-family: "Righteous", sans-serif;

      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-family: "Ga Maamli", sans-serif;
        font-size: 14px;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`