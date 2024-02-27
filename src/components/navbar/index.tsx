'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCog,
  faEnvelope,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react'
import css from './navbar.module.scss'
import { NavItem } from './nav-item'

const sampleNavItems = [
  { icon: faHome, label: 'Home', route: '/' },
  { icon: faUser, label: 'Profile', route: '/profile' },
  { icon: faEnvelope, label: 'Messages', route: '/messages' },
  { icon: faCog, label: 'Settings', route: '/settings' },
]

export const Navbar = () => {
  const [activeIndex, _setActiveIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<boolean>(true)
  const { data: session } = useSession()

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <nav
      className={cn(css.sidebar, {
        [css.expanded]: expanded,
      })}
    >
      <header className={css.header}>
        {expanded && <p>Company Name</p>}
        <button
          className={css.iconContainer}
          onClick={handleToggleExpanded}
          aria-label="toggle navigation"
          aria-expanded={expanded}
        >
          <FontAwesomeIcon
            className="icon"
            icon={faBars}
            titleId="menu icon"
          />
        </button>
      </header>

      <ul
        className={css.navList}
        role="list"
      >
        {sampleNavItems.map(({ icon, label, route}, idx) => 
          <NavItem
            key={label}
            icon={icon}
            label={label}
            route={route}
            active={idx === activeIndex}
            expanded={expanded}
          />
        )}
      </ul>

      <footer className={css.footer}>
        <div className={css.user}>
          {expanded && (
            <>
              {session?.user?.name}

              {session ? (
                <button onClick={() => signOut()}>
                  Sign Out
                </button>
              ) : (
                <>
                  <button onClick={() => signIn()}>
                    Sign In
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <div className={css.iconContainer}>
          <FontAwesomeIcon
            className="icon"
            icon={faSignOutAlt}
            titleId="logout icon"
          />
        </div>
      </footer>
    </nav>
  )
}

