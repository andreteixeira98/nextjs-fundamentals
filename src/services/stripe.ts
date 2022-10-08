import Stripe from 'stripe';
import packageInfor from '../../package.json';

const stripeApi = new Stripe(
  process.env.STRIPE_API_KEY
  ,{
    apiVersion:'2022-08-01',
    appInfo:{
      name:"ignews",
      version:packageInfor.version
    }
});

export {stripeApi};