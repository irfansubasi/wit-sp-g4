import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function LoginForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="enter your email"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="enter your password"
          type="password"
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" /> <Label check>I agree</Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
