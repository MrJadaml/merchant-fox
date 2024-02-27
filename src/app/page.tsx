import Link from 'next/link'
import '../styles/globals.scss'
import css from './page.module.css'
import prisma from '../../lib/prisma'

async function getBusinesses() {
  return await prisma.business.findMany({})
}

export default async function Home() {
  const businesses = await getBusinesses()

  return (
    <main className={css.main}>
      <div className={css.description}>
        {businesses.map(business => (
          <div key={business.id}>
            <h3>{business.name}</h3>
          </div>
        ))}
      </div>

      <footer className={css.grid}>
        <Link
          href="/your/shops/onboarding"
          className={css.footerLink}
        >
          <h2>
            Sell on Merchant Fox <span>-&gt;</span>
          </h2>
          <p>Get started by setting up your digital store on Merchant Fox</p>
        </Link>
      </footer>
    </main>
  )
}
 
