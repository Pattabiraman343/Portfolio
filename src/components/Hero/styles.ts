import styled from "styled-components";

export const Container = styled.section`
  padding-top: 10%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);

  .hero-text{
    & > p{
      font-size: 9.8rem;
    }
    h1{
      font-size: 6rem;
      font-family: "Baskervville SC", serif;

    }
    .small{
      font-size: 3rem;
      font-family: "Baskervville SC", serif;

    }
    h3 {
      font-size: 8rem;
      font-family: "Climate Crisis", sans-serif;
      margin: 1rem 0;
      color: gold;
    
    }
    
    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 3rem;
      font-family: "Ga Maamli", sans-serif;

    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button {
    display: inline-block;
    padding: 12px 28px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Comic Sans MS", "Chalkboard SE", cursive;
    color: #000000;
    background: linear-gradient(135deg, #f9d849, #f9d849);   border: 3px solid #000;
    border-radius: 12px;
    box-shadow: 4px 4px 0px #000, 6px 6px 0px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  
  .button:hover {
    transform: translate(-3px, -3px);
    background: linear-gradient(135deg, #FF5722, #FFEB3B);  }
  
  .button:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(0,0,0,0.2);
  }
  
  .hero-image{
    img{
      width: 860px;
      height: 533px;         /* increase height */
      max-width: 100%;        /* stay responsive on smaller screens */
      border-radius: 2rem;    /* smooth rounded corners */
      object-fit: cover;      /* maintain aspect ratio */
      box-shadow: 0 15px 35px rgba(0,0,0,0.4);
      transition: 0.5s all;
      &:hover{
        transform: scale(1.05);   /* subtle zoom on hover */
        box-shadow: 0 25px 50px rgba(0,0,0,0.6);
      }
    }
  }
  
  @media (max-width: 680px) {
    .hero-text h3 {
      font-size: 5rem;
    }
  }
  @media (max-width: 432px) {
    .hero-text h3 {
      font-size: 3rem;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{
      h1{
        font-size: 4.5rem;
      }
    }
    
    .hero-image{
      display: block;
      text-align: center;
      img{
        max-width: 90%;
        max-height: 700px;  /* responsive height */
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
    .hero-image img{
      max-height: 500px;
    }
  }
  @media(max-width: 480px){
    margin-top: 45%;
    .hero-image img{
      max-width: 100%;
      max-height: 400px;
    }
  }
`;
