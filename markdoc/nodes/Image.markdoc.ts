import Image from "@/src/components/Markdoc/Image";

export const image = {
  render: Image,
  attributes: {
    src: { type: String },
    alt: { type: String }
  },
};