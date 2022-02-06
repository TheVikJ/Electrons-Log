import { default as NextLink } from 'next/link'
import { useEffect, useState } from 'react'
import {
  sendOtp as loginUser,
  verifyOtp as validateUserLogin,
} from '../utils/userApi'
import Loading from '../components/UI/Loading'
import useAxiosData from '../hooks/useAxiosData'
import useUser from '../hooks/useUser'
import { TextInput } from '../components/UI/Inputs'
import Card from '../components/UI/card'
import { Header } from '../components/UI/Typography'
import { PrimaryButton, SecondaryButton } from '../components/UI/button'

const LoginPrompt = ({ onLogin, message, loading }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formValid, setFormValid] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {}, 200)
    setFormValid(/^\+[1-9]\d{5,14}$/.test(phoneNumber))
    return () => {
      clearTimeout(timeout)
    }
  }, [phoneNumber])

  const login = (e) => {
    e.preventDefault()

    if (!formValid) {
      return
    }

    onLogin({ phone: phoneNumber })
  }

  const errorMessage =
    message &&
    (message.response
      ? message.response.data.message
      : message.toJSON().message)

  return (
    <div className="flex flex-col items-center justify-center my-auto flex-grow h-screen">
      {errorMessage && (
        <p className={'text-red-500 pb-2 font-semibold text-lg'}>
          {errorMessage}
        </p>
      )}
      <Card>
        <Header ariaLabel="Login to your account">
          Login with phone number
        </Header>
        <br />
        <TextInput
          label={'Phone Number'}
          value={phoneNumber}
          setValue={setPhoneNumber}
          invalid={phoneNumber.length === 0 ? false : !formValid}
        />

        <div className="mt-8">
          <PrimaryButton
            onClick={login}
            disabled={loading}
            aria-label={'login to my account'}
            className={'w-full'}
          >
            Login
          </PrimaryButton>
        </div>
      </Card>

      {loading && (
        <Loading
          style={{
            position: 'relative',
            marginTop: '2rem',
          }}
        />
      )}
    </div>
  )
}

const OtpPrompt = ({ requestData }) => {
  const [otp, setOtp] = useState('')
  const [otpValid, setOtpValid] = useState(true)
  const [message, setMessage] = useState({ error: false, value: '' })

  const { mutate } = useUser()

  const login = async () => {
    if (otp.trim().length !== 6) {
      setOtpValid(false)
      return
    }
    setOtpValid(true)

    validateUserLogin({ ...requestData, otp: +otp })
      .then((resp) => {
        setMessage({
          error: false,
          value: 'Login successful! You will be redirected shortly..',
        })
        mutate(null)
      })
      .catch((resp) => {
        setMessage({
          error: true,
          value: 'Invalid OTP entered',
        })
      })
  }

  return (
    <div className="flex flex-col items-center justify-center my-auto flex-grow h-screen">
      {message.value && (
        <p
          className={`text-${
            message.error ? 'red' : 'emerald'
          }-500 pb-2 font-semibold text-lg`}
        >
          {message.value}
        </p>
      )}

      <Card>
        <Header ariaLabel="Enter OTP">Enter OTP</Header>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Please enter the OTP sent on your Phone Number.{' '}
        </p>
        <br className={'my-5'} />

        <TextInput
          label={'OTP'}
          value={otp}
          setValue={setOtp}
          invalid={!otpValid}
        />

        <div className="mt-8">
          <PrimaryButton className={'w-full'} onClick={login}>
            Login
          </PrimaryButton>
        </div>
      </Card>
    </div>
  )
}

function Login() {
  const [loginData, makeLoginRequest] = useAxiosData()

  const login = (credentials) => {
    makeLoginRequest(
      loginUser({
        ...credentials,
        medium: 'email',
      })
    )
  }

  return (
    <main className={'w-full h-screen'}>
      <NextLink href={'/'}>
        <SecondaryButton className={'fixed top-0 left-0 mt-4 ml-4'}>
          Back
        </SecondaryButton>
      </NextLink>

      {loginData.data ? (
        <OtpPrompt requestData={loginData.data} />
      ) : (
        <LoginPrompt
          message={loginData.error}
          onLogin={login}
          loading={loginData.loading}
        />
      )}
    </main>
  )
}

Login.isAnonymous = true

export default Login
