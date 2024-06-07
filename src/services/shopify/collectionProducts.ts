import { env } from 'app/config/env'
import { shopifyUrls } from './urls'

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ""
      })
    })
    const { products } = await response.json()
    return products
  } catch (error) {
    console.log(error)
  }
}
