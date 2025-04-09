import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";
// import type { ComponentType } from "react";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon as any,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
