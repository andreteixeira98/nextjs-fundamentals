import React from 'react';
import Head from 'next/head';
import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { GetServerSideProps, GetStaticProps } from 'next';
import { stripeApi } from '../services/stripe';


interface IHomeProps{
  product:{
    priceId:string;
    amount:number;
  }
 
}
export default function Home({product}:IHomeProps) {

  const priceFormatted = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format(product.amount/100);
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
          <span>for {priceFormatted} month</span>
          </p>
        <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/assets/images/avatar.svg" alt="girl coding" />
      </main>

    </>
  )
}


export const getStaticProps:GetStaticProps = async ()=>{
  const price = await stripeApi.prices.retrieve('price_1LqcTZIM4PDbVAWBQ38gqIe1');

  const product ={
    priceId:price.id,
    amount:price.unit_amount
  }

  return {
    props:{
      product
    },
    revalidate: 60 * 60 * 24
  }
}
