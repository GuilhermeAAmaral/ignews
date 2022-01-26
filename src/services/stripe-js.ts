import { loadStripe } from '@stripe/stripe-js'
import { stripe } from './stripe'

export const getStripeJS = async () => {
    const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    return stripeJs
}