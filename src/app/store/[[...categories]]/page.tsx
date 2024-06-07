import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts } from "app/services/shopify/collectionProducts"
import { getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

type CategoryProps = {
  params: { categories: string[] }
  searchParams?: Record<string, string>
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params

  let products = []
  const collections = await getCollections()

  console.log(categories)

  
  if (categories) {
    const selectedCollection = collections.find((collection: any) => collection.handle === categories[0])
    products = await getCollectionProducts(selectedCollection?.id)
  } else {
    products = await getProducts()
  }

   return (
    <ProductsWrapper products={products} />
   )
}
