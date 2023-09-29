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

const Pagefour = (props) => {
  const {state, actions} = useStateMachine({UpdateAction})
  const { register, handleSubmit, formState: {errors, isSubmitting, },} = useForm({defaultValues: state.yourDetails})

  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.UpdateAction(data)
    navigate("/pagefive")
  }
  const handleclick = () => {
    navigate(-1)
  }
  return (
  <div>
    <p>Step 4/6</p>
    <h1>Tell us your address</h1>
    <p>Please fill in the details below</p>
    <hr></hr>
    <form onSubmit={handleSubmit(onSubmit)} className='fill'>
    <FormControl isInvalid={errors.address}>
        <FormLabel htmlFor='address' className='formlabel'>House Address</FormLabel>
        <Input
        className='forminput'
          placeholder='address'
          {...register('address', {
            required: 'address is required',
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.address && errors.address.message}
        </FormErrorMessage>
      </FormControl>
      <Button  className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={handleclick}>
        Previous
      </Button>
      <Button  className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Next
      </Button>
    </form>
</div>
  )
}
export default Pagefour;