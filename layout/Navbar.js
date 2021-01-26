
import styled from 'styled-components'
import { colors } from '../utils/variables'

const NavbarContainer = styled.nav`
   background-color: ${colors.DarkBlue};
   padding-top: 1.35rem;
   padding-bottom: 1.35rem;
`

const NavWrapper = styled.div`
   max-width: 1200px;
   width: 90vw;
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
`

const Heading = styled.span`
   color: ${colors.White};
   display: block;
   font-weight: 800;
   font-size: 2rem;
`

const Button = styled.button`
   display: block;
   justify-self: end;
   border: none;
   outline: none;
   background-color: transparent;
   font-weight: 600;
   color: ${colors.White};
   font-size: 1.25rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   padding: 0.6rem 1rem;
   transition: all 300ms ease;
   border-radius: 0.375rem;

   &:hover {
      background-color: ${colors.VeryDarkBlue};
   }
`

const ButtonText = styled.span`
   margin-left: 0.5rem;
`

export default function Navbar() {
   return (
      <NavbarContainer>
         <NavWrapper>
            <Heading>Where in the world?</Heading>
            <Button>
               <i className="fas fa-moon"></i>
               <ButtonText>Dark Mode</ButtonText>
            </Button>
         </NavWrapper>
      </NavbarContainer>
   )
}
