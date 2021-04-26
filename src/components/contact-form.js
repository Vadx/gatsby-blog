import React from "react";
import { useForm } from 'react-hook-form'
import styled from "styled-components"

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          {...register(
            "name",
            { 
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            }
          )}
        />
        {errors?.name?.type === "required" && <FormErrorMessage>This field is required</FormErrorMessage>}
        {errors?.name?.type === "maxLength" && (
          <FormErrorMessage>First name cannot exceed 20 characters</FormErrorMessage>
        )}
        {errors?.name?.type === "pattern" && (
          <FormErrorMessage>Alphabetical characters only</FormErrorMessage>
        )}
      </FormGroup>
       
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email"
          type="email"
          {...register(
            "email",
            { 
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            }
          )}
        />
        {errors?.email?.type === "required" && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormGroup>

      
      <FormGroup>
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          {...register(
            "message",
            { 
              required: true
            }
          )}
        />
        {errors?.message?.type === "required" && <FormErrorMessage>This field is required</FormErrorMessage>}
      </FormGroup> 

      {/* <FormFeedbackWrapper>
            {netlify.success && (
              <FormSucessFeedback>Message sent succesfully</FormSucessFeedback>
            )}
            {netlify.error && (
              <FormErrorFeedback>
                Something went wrong, please try again.
              </FormErrorFeedback>
            )}
      </FormFeedbackWrapper> */}

      <FormButton type="submit">Send Message</FormButton>

    </FormWrapper>
  )
}

export default ContactForm

// Styled components:

const FormWrapper = styled.form`
  max-width: 45ch;
  padding: 1rem;
  padding-top: 0;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-family: inherit;
  & label {
    margin-top: 1rem;
    text-transform: capitalize;
  }
  & input,
  textarea {
    resize: vertical;
    font-family: inherit;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: #e4b8c7;
    border: 2px solid transparent;
  }
  & textarea:focus,
  input:focus {
    outline: none;
    border: 2px solid #80576e;
  }
`

const FormErrorMessage = styled.span`
  color: red;
  opacity: 0.7;
`

const FormFeedbackWrapper = styled.div`
  margin-top: 1rem;
  text-transform: uppercase;
`

const FormSucessFeedback = styled.span`
  color: green;
`

const FormErrorFeedback = styled.span`
  color: red;
`

const FormButton = styled.button`
  margin-top: 1rem;
  padding: 0.45rem;
  padding-left: 1.25rem;
  padding-right: 1.5rem;
  background-color: #37292c;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  border-radius: 4px;
`