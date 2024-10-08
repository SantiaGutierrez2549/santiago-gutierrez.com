import { defineField } from 'sanity'
import { defineType } from 'sanity'

const post = defineType({
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'subtitle',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'newsType',
      type: 'string',
      options: {
        list: ['post', 'event']
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'banner',
      type: 'bannerInfo'
    }),
    defineField({
      name: 'content',
      type: 'content',
      validation: rule => rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  },
  orderings: [
    {
      title: 'Most Recent',
      name: 'releaseDateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ]
})

export default post
