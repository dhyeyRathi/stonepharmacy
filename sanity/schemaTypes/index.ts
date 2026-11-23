import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { meta } from './metadata'
import { testimonials } from './testmonials'
import { metaObject } from './metadata'
import { faqs } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,
    testimonials,
    metaObject,
    meta,
    faqs
  ],
}
