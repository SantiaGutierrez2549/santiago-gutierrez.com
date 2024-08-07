import { defineArrayMember, defineField, defineType } from 'sanity'

const project = defineType({
  name: 'projects',
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
      name: 'type',
      type: 'string',
      options: {
        list: ['Orchestra', 'Chamber', 'Vocal', 'Arrangements & Orchestrations']
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'instrumentation',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: [
              'Open Instrumentation',
              'Symphonic Percussion',
              'Hand Percussion',
              'Clarinet',
              'Flute',
              'Oboe',
              'Bassoon',
              'Trumpet',
              'Horn',
              'Trombone',
              'Tuba',
              'Violin',
              'Viola',
              'Cello',
              'Contrabass',
              'Drumset',
              'Guitar',
              'Saxophone',
              'Voice',
              'Soprano',
              'Mezzo-Soprano',
              'Alto',
              'Tenor',
              'Baritone',
              'Bass',
              'Countertenor',
              'Electronics'
            ]
          }
        })
      ]
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
      type: 'content'
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

export default project
