import React from 'react';
import Head from 'next/head';
import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {
  return (
    <>
       <Head>
       <title> Home | ig.news </title>
      </Head>

      <main className={styles.container}>

        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about <br/>
            the <span>React</span> World
          </h1>

          <p>
          Get acess to all the publications <br/>
          <span>for $9.90 month</span>
          </p>
        <SubscribeButton />
        </section>
        <img src="/assets/images/avatar.svg" alt="girl coding" />
      </main>

    </>
  )
}
