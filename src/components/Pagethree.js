import React from 'react'
import { useNavigate} from "react-router-dom"
import { useForm} from "react-hook-form"
import {useStateMachine} from "little-state-machine"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'
import UpdateAction from "./UpdateAction"

const Pagethree = (props) => {
  const {state, actions} = useStateMachine({UpdateAction});
  const { register, handleSubmit, formState: {errors, isSubmitting, },} = useForm({defaultValues: state.yourDetails})
  
  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.UpdateAction(data)
    navigate("/pagefour")
  }
  const handleclick = () => {
    navigate(-1)
  }
  return (
  <div>
    <p>Step 3/6</p>
    <h1>Tell us your phone number</h1>
    <p>Please fill in the details below</p>
    <hr></hr>
    <form onSubmit={handleSubmit(onSubmit)} className='fill'>
    <FormControl isInvalid={errors.location}>
        <FormLabel htmlFor='telephone' className='formlabel'>Phone Number</FormLabel>
        <Input
        className='forminput'
          placeholder='telephone'
          type='number'
          {...register('telephone', {
            required: 'Phone number is required',
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.telephone && errors.telephone.message}
        </FormErrorMessage>
      </FormControl>
      <Button  className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={handleclick}>
        Previous
      </Button>
      <Button className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Next
      </Button>
    </form>
</div>
  )
}
export default Pagethree;