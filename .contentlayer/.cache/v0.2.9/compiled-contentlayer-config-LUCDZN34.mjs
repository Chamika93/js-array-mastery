// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
  }
};
var Challenges = defineDocumentType(() => ({
  name: "Challenges",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    functionName: { type: "string", required: true },
    testCases: {
      type: "list",
      of: { type: "json" }
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "challenges",
  documentTypes: [Challenges],
  markdown: (builder) => {
    builder.use(remarkFrontmatter).use(remarkParse).use(remark2rehype).use(remarkGfm).use(rehypeCodeTitles).use(rehypePrism).use(rehypeStringify);
  }
});
export {
  Challenges,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LUCDZN34.mjs.map
