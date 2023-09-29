import React from "react";
import { useNavigate} from "react-router-dom"
import { useForm} from "react-hook-form"
import {useStateMachine} from "little-state-machine"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  AlertIcon,
  Alert,
} from '@chakra-ui/react'
import UpdateAction from "./UpdateAction"
import { useState } from "react";

const Result = (props) => {
  const {state, actions} = useStateMachine({UpdateAction})
  const { register, handleSubmit, formState: {errors, isSubmitting, },} = useForm({defaultValues: state.yourDetails})
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.UpdateAction(data)
    setStatus('isSubmitting');
    setMessage('');
    fetch("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {
      method: 'POST',
    })
      .then((response) => {
        if (response.status.ok) {
          throw new Error(response.statusText);
        }

        return response.json()
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
      return new Promise(resolve => {
        setTimeout(() => {resolve();},3000);
        });  
  }
  if (status === "success") {
    return (
      <>
        <Alert status='success'><AlertIcon/>Submited successfully {message}</Alert>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <Alert status='error'><AlertIcon/>Failed to submit {message}</Alert>
      </>
    );
  }
  
  const handleclick = () => {
    navigate(-1)
  }
  

  return (
  <div>
    <p>Step 6/6</p>
    <h1>Tell us your country of residents</h1>
    <p>Please fill in the details below</p>
    <hr></hr>
    <form onSubmit={handleSubmit(onSubmit)} className='fill'>
    <FormControl isInvalid={errors.country}>
        <FormLabel htmlFor='address' className='formlabel'>country</FormLabel>
        <Input
        className='forminput'
          placeholder='country'
          {...register('country', {
            required: 'country is required',
          })}
        />
        <FormErrorMessage className='formerror'>
          {errors.country && errors.country.message}
        </FormErrorMessage>
      </FormControl>
      <Button  className='formbutton' mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={handleclick}>
        Previous
      </Button>
      <Button className="formbutton" mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        submit
      </Button>
    </form>
</div>
  )
}
export default Result;