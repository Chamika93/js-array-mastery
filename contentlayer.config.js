import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
  },
}

export const Challenges = defineDocumentType(() => ({
  name: 'Challenges',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    functionName: { type: 'string', required: true },
    testCases: {
      type: 'list',
      of: { type: 'json' },
    }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'challenges',
  documentTypes: [Challenges],
  markdown: { 
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypePrism],
    remarkPlugins: [remarkGfm] 
  },
})
