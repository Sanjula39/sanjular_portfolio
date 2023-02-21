import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Institute',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Year',
      type: 'string',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name:'imgurl',
      title:'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'feedback',
      title: 'Course',
      type: 'string',
      
    }),
  ]
})
