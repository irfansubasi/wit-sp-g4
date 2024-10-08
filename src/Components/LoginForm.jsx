import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

export default function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isChecked: false,
    emailValid: false,
    passwordValid: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => {
      const newForm = {
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value,
      };

      newForm.emailValid = emailRegex.test(newForm.email);
      newForm.passwordValid = passwordRegex.test(newForm.password);

      return newForm;
    });
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormValid) {
      navigate('/success');
    }
  }

  const isFormValid = form.emailValid && form.passwordValid && form.isChecked;

  return (
    <Form>
      <FormGroup>
        <Label for="maildata">Email</Label>
        <Input
          data-cy="email"
          id="maildata"
          name="email"
          value={form.email}
          placeholder="enter your email"
          type="email"
          onChange={handleChange}
          invalid={form.email !== '' && !form.emailValid}
        />
        {form.email !== '' && !form.emailValid && (
          <FormFeedback
            data-error-cy="error-messages"
            data-cy="emailValidation"
          >
            Please enter a valid email address.
          </FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="passworddata">Password</Label>
        <Input
          data-cy="password"
          id="passworddata"
          name="password"
          value={form.password}
          placeholder="enter your password"
          type="password"
          onChange={handleChange}
          invalid={form.password !== '' && !form.passwordValid}
        />
        <FormFeedback
          data-error-cy="error-messages"
          data-cy="passwordValidation"
        >
          The password must be at least 8 characters, contain numbers, upper and
          lower case letters and special characters.
        </FormFeedback>
      </FormGroup>
      <FormGroup check>
        <Input
          data-cy="checkbox"
          type="checkbox"
          onChange={handleChange}
          name="isChecked"
          checked={form.isChecked}
        />{' '}
        <Label check>I agree</Label>
      </FormGroup>
      <Button data-cy="button" onClick={handleSubmit} disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}
