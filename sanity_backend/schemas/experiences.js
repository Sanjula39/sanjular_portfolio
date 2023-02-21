import {defineField, defineType} from 'sanity'

export default defineType({
    name:'experiences',
    title:'Experiences',
    type: 'document',
  fields: [
    defineField({
        name:'position',
            title:'Position',
            type:'string'
    }),
    defineField({
        name:'company',
            title:'Company',
            type:'string',
            
      
    }),
    defineField({
        name:'period',
            title:'Period',
            type:'string',
            
      
    }),
    
    
  ]
})