import { defineField, defineType } from 'sanity'

const about = defineType({
  name: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Site',
              type: 'string',
              options: {
                list: ['Instagram', 'Facebook', 'X', 'SoundCloud', 'Bandcamp'],
                layout: 'dropdown'
              }
            },
            {
              name: 'Handle',
              type: 'string'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'bannerAbout',
      title: 'banner: About',
      type: 'image'
    }),
    defineField({
      name: 'bannerWork',
      title: 'banner: Work',
      type: 'image'
    }),
    defineField({
      name: 'bannerNews',
      title: 'Banner: News',
      type: 'image'
    }),
    defineField({
      name: 'bannerEvents',
      title: 'Banner: Events',
      type: 'image'
    }),
    defineField({
      name: 'bioShort',
      title: 'Bio (Short)',
      type: 'array',
      of: [{ type: 'description' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'bioMedium',
      title: 'Bio (Medium)',
      type: 'array',
      of: [{ type: 'description' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'bioLong',
      title: 'Bio (Long)',
      type: 'array',
      of: [{ type: 'description' }],
      validation: rule => rule.required()
    }),
    defineField({
      name: 'headshot',
      type: 'image',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'work',
      type: 'array',
      of: [{ type: 'workInfo' }]
    }),
    defineField({
      name: 'cv',
      type: 'file',
      options: { accept: 'application/pdf' }
    }),
    defineField({
      name: 'resume',
      title: 'Résume',
      type: 'file',
      options: { accept: 'application/pdf' }
    })
  ]
})

export default about
