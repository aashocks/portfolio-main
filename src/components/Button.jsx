import { motion } from 'framer-motion'

const hover = { scale: 1.03 }
const tap = { scale: 0.97 }

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 * External links automatically open safely in a new tab.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="btn__icon">{icon}</span> : null}
    </>
  )

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <motion.a
        className={classes}
        href={href}
        whileHover={hover}
        whileTap={tap}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} whileHover={hover} whileTap={tap} {...rest}>
      {content}
    </motion.button>
  )
}
