import { filter } from 'lodash'
import { defineArrayMember, defineField, defineType } from 'sanity'

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
      title: 'Upcoming Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'news' }],
          options: {
            filter: 'newsType == "event"'
          }
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
          to: [{ type: 'news' }],
          options: {
            filter: 'newsType == "post"'
          }
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
