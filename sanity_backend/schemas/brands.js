import {defineField, defineType} from 'sanity'

export default defineType({
    name:'brands',
    title:'Brands',
    type: 'document',
  fields: [
    defineField({
        name:'title',
        title:'Title',
        type:'string'
    }),
    defineField({
        name:'name',
        title:'Name',
        type:'string'
    }),
    
    
  ]
})