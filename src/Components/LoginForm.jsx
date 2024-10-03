import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isChecked: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  }

  return (
    <Form>
      <FormGroup>
        <Label for="maildata">Email</Label>
        <Input
          id="maildata"
          name="email"
          placeholder="enter your email"
          type="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="passworddata">Password</Label>
        <Input
          id="passworddata"
          name="password"
          placeholder="enter your password"
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          onChange={handleChange}
          name="isChecked"
          checked={form.isChecked}
        />{' '}
        <Label check>I agree</Label>
      </FormGroup>
      <Button disabled={!form.isChecked}>Submit</Button>
    </Form>
  );
}
