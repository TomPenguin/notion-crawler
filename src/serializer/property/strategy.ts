import { defaults } from "./defaults.js";
import { Serializers } from "./types.js";

export const strategy: Serializers = {
  checkbox: defaults.checkbox,
  created_by: defaults.createdBy,
  created_time: defaults.createdTime,
  date: defaults.date,
  email: defaults.email,
  files: defaults.files,
  formula: defaults.formula,
  last_edited_by: defaults.lastEditedBy,
  last_edited_time: defaults.lastEditedTime,
  multi_select: defaults.multiSelect,
  number: defaults.number,
  people: defaults.people,
  phone_number: defaults.phoneNumber,
  relation: defaults.relation,
  rich_text: () => false,
  rollup: () => false,
  select: () => false,
  status: () => false,
  title: defaults.title,
  unique_id: () => false,
  url: () => false,
  verification: () => false,
};
