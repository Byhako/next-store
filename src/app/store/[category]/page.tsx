type CategoryProps = {
  params: { category: string }
}

export default function Category({ params }: CategoryProps) {
  console.log('para', params)
   return (
    <h1>Categoria {params?.category}</h1>
   )
}
