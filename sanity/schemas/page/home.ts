import { defineField, defineType } from 'sanity'

const home = defineType({
  name: 'home',
  type: 'document',
  fields: [
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
            { name: 'date', type: 'date' },
            { name: 'banner', type: 'bannerInfo' }
          ]
        }
      ]
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'events' }, { type: 'posts' }, { type: 'projects' }]
        }
      ]
    })
  ]
})

export default home
