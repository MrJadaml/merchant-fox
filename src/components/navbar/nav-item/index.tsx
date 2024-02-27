import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import css from './navItem.module.scss'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavItemProps {
  active: boolean
  expanded: boolean
  icon: IconDefinition
  key: string
  label: string
  route: string
}

export const NavItem: React.FC<NavItemProps> = ({
  active,
  expanded,
  icon,
  label,
  route,
}) => {
  const ariaLabel = expanded ? `${label} - Expanded` : label

  return (
    <li
      className={cn(css.navItem, {
        [css.active]: active,
        [css.expanded]: expanded,
      })}
      aria-label={ariaLabel}
      role="listitem"
    >
      <Link href={route}>
        <div className={css.iconContainer}>
          <FontAwesomeIcon
            icon={icon}
            className="icon"
            aria-hidden="true"
          />
        </div>

        <div
          className={cn('non', {
            [css.label]: expanded,
            [css.tooltip]: !expanded,
          })}
         >
          {label}
        </div>
      </Link>
    </li>
  )
}

