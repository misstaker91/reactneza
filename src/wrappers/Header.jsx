import styled from 'styled-components'

const Header = styled.nav`
  
  
  .logo {
    height: 10vh;
    border-bottom: .5rem solid var(--main-blue);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
  }

  .logo h1 {
    
    color: var(--main-dark-grey);
    font-size: 4.2rem;
    font-weight: var(--main-font-400);
  }
  
   .logo h1 span {
    
    color: var(--main-blue);
    font-size: 4.2rem;
    font-weight: var(--main-font-400);
  }
`

export default Header
