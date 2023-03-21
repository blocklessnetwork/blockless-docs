import Code from "@/src/components/Markdoc/Code";

export const fence = {
  render: Code,
  attributes: {
    content: { type: String },
    language: { type: String },
  },
};