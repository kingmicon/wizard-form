import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import {useStateMachine} from "little-state-machine"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
} from '@chakra-ui/react'
import UpdateAction from "./UpdateAction"

const Pagetwo = (props) => {
  const {state, actions} = useStateMachine({UpdateAction})
  const { register, handleSubmit, formState: {errors, isSubmitting, },} = useForm({defaultValues: state.yourDetails})
  
  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.UpdateAction(data)
    navigate("/pagethree")
  }
  const handleclick = () => {
    navigate(-1)
  }

  return (
  <div>
    <p>Step 2/6</p>
    <h1>Tell us your email address</h1>
    <p>Please fill in the details below</p>
    <hr></hr>
    <form onSubmit={handleSubmit(onSubmit)} className='fill'>
    <FormControl isInvalid={errors.location}>
        <FormLabel htmlFor='email' className='formlabel'>Email</FormLabel>
        <Input
        className='forminput'
          placeholder='email'
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /\S+@|S+\.\S+/, message: 'Invalid email' },
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.email && errors.email.message}
        </FormErrorMessage>
        <FormHelperText className='formerror'>
          Must be a valid email
        </FormHelperText>
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

export default Pagetwo;