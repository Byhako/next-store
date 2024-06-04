export type Image = {
  id: string | number
  alt: string | null
  position: number
  product_id: number
  created_at: string
  updated_at: string
  admin_graphql_api_id: string
  width: number
  height: number
  src: string
  variant_ids: any
}

type Option = {
  id: number
  product_id: number
  name: string
  position: number
  values: string[]
}

type Variant = {
  id: number
  product_id: number
  title: string
  price: string
  sku: number | string | null
  position: number
  inventory_policy: string
  compare_at_price: string
  fulfillment_service: string
  inventory_management: null,
  option1: string
  option2: null | string
  option3: null | string
  created_at: string
  updated_at: string
  taxable: boolean
  barcode: number | string | null
  grams: number
  weight: number
  weight_unit: string
  inventory_item_id: number
  inventory_quantity: number
  old_inventory_quantity: number
  requires_shipping: boolean
  admin_graphql_api_id: string
  image_id: number | string | null
}

export type Product = {
  id: string | number
  title: string
  body_html: string
  vendor: string
  product_type: string
  created_at: string
  handle: string
  updated_at: string
  published_at: string
  template_suffix: string | null,
  published_scope: string
  tags: string
  status: string
  admin_graphql_api_id: string
  variants: Variant[]
  options: Option[]
  images: Image[]
  image: Image
}

export type Products = Product[]