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
} from '@chakra-ui/react'
import UpdateAction from "./UpdateAction"


const Pageone = (props) => {
  const {state, actions} = useStateMachine({UpdateAction})
  const { register, handleSubmit, formState: {errors, isSubmitting, },} = useForm({
    defaultValues: state.yourDetails
  })
  
  const  navigate = useNavigate();
  const onSubmit = (data) => {
    actions.UpdateAction(data)
    navigate("/pagetwo")
  }
  

  return (
  <div>
    <p>Step 1/6</p>
    <h1>Lets start with your name</h1>
    <p>Please fill in the details below</p>
    <hr></hr>
    <form onSubmit={handleSubmit(onSubmit)} className='fill'>
    <FormControl isInvalid={errors.firstName}>
        <FormLabel htmlFor='firstName' className='formlabel'>Full Name</FormLabel>
        <Input
        className='forminput'
          placeholder='firstName'
          {...register('firstName', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.firstName && errors.firstName.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName}>
        <FormLabel htmlFor='lastName' className='formlabel'>Last Name</FormLabel>
        <Input
        className='forminput'
          placeholder='lastName'
          {...register('lastName', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.lastName && errors.lastName.message}
        </FormErrorMessage>
      </FormControl>
      <Button className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Next
      </Button>
    </form>
</div>
  )
}

export default Pageone