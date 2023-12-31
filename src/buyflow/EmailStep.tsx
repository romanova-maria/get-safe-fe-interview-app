import { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep = (props: EmailStepProps) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => props.cb('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
