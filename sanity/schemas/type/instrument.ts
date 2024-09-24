import { defineType } from 'sanity'

const instrument = defineType({
  name: 'instrument',
  type: 'object',
  preview: {
    select: {
      title: 'standardInstrument'
    }
  },
  fields: [
    { name: 'type', type: 'string', options: { list: ['standard', 'custom'] } },
    {
      name: 'customInstrument',
      title: 'Instrument',
      type: 'string',
      hidden: s => s.parent.type !== 'custom'
    },
    {
      name: 'standardInstrument',
      title: 'Instrument',
      type: 'string',
      hidden: s => s.parent.type !== 'standard',
      options: {
        list: [
          'Open Instrumentation',
          'Symphonic Percussion',
          'Hand Percussion',
          'Snare',
          'Piano',
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
          'Electronics',
          'Orchestra'
        ]
      }
    }
  ]
})

export default instrument
