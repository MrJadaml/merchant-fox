import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { BusinessProps } from '../../components/Business'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {},
  }
}

const Business: React.FC<BusinessProps> = ({
  name,
  owner,
}) => {
  return (
    <Layout>
      <div>
        <h2>{name}</h2>
        <p>{owner}</p>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Business
