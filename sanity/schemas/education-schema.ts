const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
  ],
}
export default education
