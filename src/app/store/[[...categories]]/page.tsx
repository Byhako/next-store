import { ProductsWrapper } from "app/components/Store/ProductsWrapper"

type CategoryProps = {
  params: { categories: string[] }
  searchParams?: Record<string, string>
}

export default async function Category(props: CategoryProps) {
  const response = await fetch('http://localhost:3000/api')
  const { products } = await response.json()

  const { params, searchParams } = props
   return (
    <ProductsWrapper products={products} />
   )
}
