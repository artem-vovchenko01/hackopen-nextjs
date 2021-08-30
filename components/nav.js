import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/nav.module.css'

export default function Nav() {
    return (
      <header>
        <nav className={styles.nav}>
          <ul>
            <Link href='/'>
              <a>
              <li className={styles.logoLi}>
              <Image className={styles.logo} height={15} width={64} src='/images/hackopenLogo.png' />
              </li>
              </a>
            </Link>

          <Link href='#'>
            <a>
            <li className={styles.navStart}>
                <a>register</a>
            </li>
            </a>
          </Link>
          <Link href='#'>
            <a>
            <li>
                <a>login</a>
            </li>
            </a>
          </Link>
          <Link href='#'>
            <a>
            <li>
                <a>contact</a>
            </li>
            </a>
          </Link>
          <Link href='#'>
            <a>
            <li>
                <a>weather</a>
            </li>
            </a>
          </Link>
          </ul>
        </nav>
      </header>
    );
}