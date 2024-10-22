const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'nickname',
      title: 'Nickname',
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
      name: 'tags',
      title: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {value: 'website', title: 'Website'},
          {value: 'app', title: 'App'},
          {value: 'game', title: 'Game'},
          {value: 'hardware-related', title: 'Hardware Related'},
        ],
      },
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
}
export default project
