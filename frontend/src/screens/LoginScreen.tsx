import { SyntheticEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { UserState } from '../reducers/userReducers'

interface Props {
  history: RouteComponentProps['history']
}

const LoginScreen = ({ history }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector<UserState, UserState>((state) => state)
  const { loading, error, userInfo } = userLogin

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    // await fetch('http://localhost:8081/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })

    dispatch(login(email, password))

    history.push('/')
  }

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Login
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
