const experience = {
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
export default experience
