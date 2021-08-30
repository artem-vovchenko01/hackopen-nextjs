import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './nav'

export default function Layout( { children, home }) {
    return (
        <div>
            <Head>
                <Nav/>
            </Head>
            <main>{ children }</main>
        </div>
    )
}