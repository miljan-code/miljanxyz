import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.mdx`,
  contentType: 'mdx',
  // fields: {
  //   title: {
  //     type: 'string',
  //     description: 'The title of the post',
  //     required: true,
  //   },
  //   date: {
  //     type: 'date',
  //     description: 'The date of the post',
  //     required: true,
  //   },
  // },
  computedFields: {
    url: {
      type: 'string',
      resolve: about => `/about/${about._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [About],
});
