import rehypePrettyCode from 'rehype-pretty-code';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').at(-1),
  },
};

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.mdx`,
  contentType: 'mdx',
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    order: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    coverUrl: {
      type: 'string',
      required: true,
    },
    techStack: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    githubUrl: {
      type: 'string',
      required: true,
    },
    demoUrl: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    coverUrl: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields,
}));

export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    username: {
      type: 'string',
      required: true,
    },
    avatar: {
      type: 'string',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [About, Project, Post, Author],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
    ],
  },
});
