import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'founders',
    title: 'Founders',
    type: 'document',
    fields: [
      defineField({
        name: 'founder1',
        title: 'Founder 1',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Founder 1 Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Founder 1 Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }
        ]
      }),
      defineField({
        name: 'founder2',
        title: 'Founder 2',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Founder 2 Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Founder 2 Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }
        ]
      })
    ]
})
