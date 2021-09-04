import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/nav.module.css'

export default function Nav() {
    return (
      <header>
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
              <li className={styles.logoLi + ' ' + styles.navLi}>
                <Link href='/'>
                  <a className={styles.navA}>
                  <Image className={styles.logo} height={15} width={64} src='/images/hackopenLogo.png' />
                  </a>
                </Link>
              </li>

            <li className={styles.navStart + ' ' + styles.navLi}>
              <Link href='/login'>
                <a className={styles.navA}>
                    register
                </a>
              </Link>
            </li>

            <li className={styles.navLi}>
              <Link href='#'>
                <a className={styles.navA}>
                    login
                </a>
              </Link>
            </li>

            <li className={styles.navLi}>
              <Link href='#'>
                <a className={styles.navA}>
                    contact
                </a>
              </Link>
            </li>

            <li className={styles.navLi}>
                <Link href='#'>
                  <a className={styles.navA}>
                      weather
                  </a>
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}