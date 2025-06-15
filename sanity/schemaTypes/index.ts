import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import galleryImage from './galleryImage'
import pressRelease from './pressRelease'
import storyImage from './storyImage'
import founderImages from './founderImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, galleryImage, pressRelease,storyImage,founderImages],
}
