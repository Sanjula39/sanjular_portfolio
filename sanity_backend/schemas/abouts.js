import {defineField, defineType} from 'sanity'

export default defineType({
    name:'abouts',
    title:'Abouts',
    type: 'document',
  fields: [
    defineField({
        name:'title',
        title:'Title',
        type:'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
        name:'imgUrl',
        title:'ImgUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    
  ]
})