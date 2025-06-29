import React from 'react'
import s from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <footer className={s.wrapperFooter}>
          <section className={s.sectionContacts}>
              <h2 className={s.footerTitle}>Contacts</h2>
              <address aria-label='Contacts' className={s.addressContainer}>
              <Link to="/" aria-label='Main page'>
        <svg width='104' height='16'><use href='/icons.svg#logo' /></svg>
      </Link>
      <a href="mailto:kovalskayavi853@gmail.com">kovalskayavi853@gmail.com</a>
  <a href="tel:+380956717633">+38 (095) 671-76-33</a>
</address>
          </section>
          {/* <section aria-label="Fast links" className={s.section}>
          <ul className={s.links}>
            <li><Link to="/privacy">Политика конфиденциальности</Link></li>
            <li><Link to="/terms">Условия использования</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </section> */}

        <section aria-label="Social media" className={s.sectionSocial}>
          <ul className={s.socialList}>
            <li>
              <a href="https://www.linkedin.com/in/viktoriia-kovalska-b79398326/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
            Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Vi-Kovalska" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            GitHub
              </a>
                  </li>
                  <li>
              <a href="https://t.me/unworldly_kissa" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
             Telegram
              </a>
            </li>
          </ul>
        </section>

        <p className={s.copyright}>
          &copy; {new Date().getFullYear()} Rental Car. All rights reserved.
        </p>

    </footer>
  )
}

export default Footer