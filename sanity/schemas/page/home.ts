import { defineField, defineType } from 'sanity'

const home = defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'slogan',
      type: 'string'
    }),
    defineField({
      name: 'homeImage',
      type: 'image'
    }),
    defineField({
      name: 'upcomingWorks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'subtitle',
              type: 'string'
            },
            { name: 'info', type: 'content' },
            { name: 'date', type: 'datetime' },
            { name: 'place', type: 'string' },
            { name: 'banner', type: 'bannerInfo' }
          ]
        }
      ]
    }),
    defineField({
      name: 'highlightsBackground',
      type: 'image'
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'events' }, { type: 'posts' }]
        }
      ]
    }),
    defineField({
      name: 'featuredWorks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projects' }]
        }
      ]
    })
  ]
})

export default home
