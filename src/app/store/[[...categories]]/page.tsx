type CategoryProps = {
  params: { categories: string[] }
  searchParams?: Record<string, string>
}

export default function Category(props: CategoryProps) {
  const { params, searchParams } = props
  console.log('para', searchParams)
   return (
    <>
      <h1>Categoria {params?.categories}</h1>
      <h2>{[1,2,3]}</h2>
    </>
   )
}
