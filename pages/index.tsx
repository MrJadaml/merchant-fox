import React from 'react'
import { GetStaticProps } from 'next'
import prisma from '../lib/prisma'
import Layout from '../components/Layout'
import Business, { BusinessProps } from '../components/Business'

export const getStaticProps: GetStaticProps = async () => {
    const businessess = await prisma.business.findMany()

    return {
      props: { businessess },
      revalidate: 10,
    }
}

type Props = {
  businessess: BusinessProps[]
}

const Home: React.FC<Props> = ({ businessess=[] }) => {
  return (
    <Layout>
      <div className="page">
        <h1>Business Directory</h1>

        <main>
          {businessess.map((business) => (
            <div key={business.id} className="business">
              <Business business={business} />
            </div>
          ))}
        </main>
      </div>

      <style jsx>{`
        .business {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .business:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .business + .business {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home
