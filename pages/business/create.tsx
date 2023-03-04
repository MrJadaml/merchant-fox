import React, { useState } from 'react'
import Router from 'next/router'
import Layout from '../../components/Layout'

export type BusinessProps = {
  id: string
  name: string
  owner: string
}

const Create: React.FC<{ business: BusinessProps }> = ({ business }) => {
  const [name, setName] = useState('')
  const [ownerId, setOwnerId] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const body = { name, ownerId }

      await fetch('/api/business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Business</h1>

          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Business Name"
            type="text"
            value={name}
          />

          <input disabled={!name} type="submit" value="Create" />

          <a className="cancel" href="#" onClick={() => Router.push('/')}>
            Cancel
          </a>
        </form>

        <style jsx>{`
          .page {
            background: var(--geist-background);
            padding: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          input[type='text'],
          textarea {
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 0.25rem;
            border: 0.125rem solid rgba(0, 0, 0, 0.2);
          }

          input[type='submit'] {
            background: #ececec;
            border: 0;
            padding: 1rem 2rem;
          }

          .cancel {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default Create
