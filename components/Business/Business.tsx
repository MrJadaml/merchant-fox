import React from 'react'
import Router from 'next/router'

export type BusinessProps = {
  id: string
  name: string
  owner: string
}

const Business: React.FC<{ business: BusinessProps }> = ({ business }) => {
  return (
    <div onClick={() => Router.push('/business/[id]', `/business/${business.id}`)}>
      <h2>{business.name}</h2>

      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Business
