import styled from 'styled-components'

const Main = styled.main`
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

  }


  .box .textbox {
    position: relative;
    height: 20vh;
    border: 0.3rem solid var(--main-blue);
    border-radius: 11px;
    width: 80%;

  }

  .helper__dots {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);


  }

  .dotted:not(:last-child) {
    margin-right: 1.2rem;
  }

  .dotted {
    display: flex; /* or inline-flex */
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 0.3rem solid var(--main-blue);


  }

  .dotted:not(.active) {
    background-color: var(--main-blue);
  }

  .dotted {

    font-size: 1.6rem;
    font-weight: var(--font-600);
    color: var(--main-dark-grey);
  }

  .box .textbox h2 {
    font-size: 1.8rem;
    font-weight: var(--font-500);
    color: var(--main-dark-grey);
    text-align: center;
    margin-top: 1rem;

  }

  .box .textbox h2:not(.active) {
    display: none;

  }

  .box .card {
    position: relative;
    height: 80vh;
    border: 0.3rem solid var(--main-blue);
    border-radius: 11px;
    width: 80%;

  }

  .box .card .card-heading {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;


  }

  .box .card .card-heading h2 {

    margin-top: 1rem;


  }

  .card-heading h2.active {
    font-size: 2rem;
    font-weight: var(--font-500);
    color: var(--main-blue);
  }

  .card-heading h2:not(.active) {
    font-size: 2rem;
    font-weight: var(--font-500);
    color: var(--main-dark-grey);
  }

  .popisek_sluzby {
    display: grid;
    justify-content: center;
    justify-items: start;
  }

  .popisek_sluzby p {
    font-size: 1.8rem;
    font-weight: var(--font-400);
  }

  .popisek_sluzby p:not(:last-child) {
    margin-bottom: 2rem;
  }

  .landingForm {
    margin-top: 4rem;
    display: grid;
    justify-items: center;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
    border: none;
    max-width: 100%;
  }
  
  #btn1 {
    border: none;
    background-color: #ededed;
    border: 5px solid #c6e4fc;
  }
  
   #btn2 {
    border: none;
    background-color: #ededed;
    border: 5px solid #c6e4fc;
  }
  
  #btn1:active {
    background-color: #c6e4fc;
  }
  
  #btn1:focus {
  background-color: #c6e4fc;
}
  
   #btn2:active {
    background-color: #c6e4fc;
  }
  
  #btn2:focus {
  background-color: #c6e4fc;
}
  

  .landingForm input,
  .landingForm select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border-radius: 9px;
   
  }

  
  .pokracovat {
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
    
  }


`


export default Main