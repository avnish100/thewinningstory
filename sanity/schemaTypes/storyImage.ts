import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'storyImage',
    title: 'Story Image',
    type: 'document',
    fields: [defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      })
    ]
})
