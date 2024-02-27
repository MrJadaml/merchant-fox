'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Input } from '../../../../stories/input'
import { Button } from '../../../../stories/button'
import css from './onboarding.module.scss'

interface IBusiness {
  name: string
}

const initialBusiness: IBusiness = {
  name: '',
}

export default function Onboarding() {
  const [isLoading, setIsLoading] = useState(false)
  const [business, setBusiness] = useState<IBusiness>(initialBusiness)
  const { data: session } = useSession()

  const handleBusinessUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setBusiness({
        ...business,
        [e.target.name]: e.target.value,
      })
    } catch (err) {
      console.error(err, 'AddBusiness', 'handleBusinessUpdate')
    }
  }

  const handleCreateBusiness = async (evt: FormEvent) => {
    evt.preventDefault()

    try {
      setIsLoading(true)

      const newBusiness = {
        ...business,
        owner: session?.user,
      }

      const response = await fetch('/api/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBusiness),
      })

      if (!response.ok) {
        console.error('Response not OK:', response.statusText);
      }
    } catch (err) {
      console.error('#handleCreateBusiness', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={css.wrapper}>
      <h1>Store Setup</h1>
      <p>Let's get started! Tell us about you and your shop.</p>

      <form onSubmit={handleCreateBusiness}>
        <Input
          onChange={handleBusinessUpdate}
          disabled={isLoading}
          label="Business Name"
          name="name"
          type="text"
          value={business.name}
        />

        <Button
          disabled={isLoading}
          label="Save"
          type="submit"
        />
      </form>
    </div>
  )
}
 
