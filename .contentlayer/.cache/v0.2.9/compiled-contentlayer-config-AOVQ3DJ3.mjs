// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
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
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypePrism],
    remarkPlugins: [remarkGfm]
  }
});
export {
  Challenges,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AOVQ3DJ3.mjs.map
