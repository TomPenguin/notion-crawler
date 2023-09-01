import { Serializers } from "./types.js";

export const strategy: Serializers = {
  checkbox: () => false,
  created_by: () => false,
  created_time: () => false,
  date: () => false,
  email: () => false,
  files: () => false,
  formula: () => false,
  last_edited_by: () => false,
  last_edited_time: () => false,
  multi_select: () => false,
  number: () => false,
  people: () => false,
  phone_number: () => false,
  relation: () => false,
  rich_text: () => false,
  rollup: () => false,
  select: () => false,
  status: () => false,
  title: () => false,
  unique_id: () => false,
  url: () => false,
  verification: () => false,
};
