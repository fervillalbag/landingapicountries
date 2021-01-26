
import styled from 'styled-components'
import { colors } from '../utils/variables'

const Form = styled.form`
   padding-top: 2rem;
   padding-bottom: 2rem;
`

const FormWrapper = styled.div`
   max-width: 1200px;
   width: 90vw;
   margin-left: auto;
   margin-right: auto;
   display: grid;
   grid-template-columns: 1fr 2fr;
   align-items: center;
`

const InputText = styled.input`
   width: 100%;
   display: block;
   height: 2rem;
   outline: none;
   border-radius: 0.375rem;
   padding-left: 0.5rem;
   background-color: ${colors.DarkBlue};
`

export default function Heading() {
   return (
      <Form>
         <FormWrapper>
            <InputText type="text" />
         </FormWrapper>
      </Form>
   )
}
