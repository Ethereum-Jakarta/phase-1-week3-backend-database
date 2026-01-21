export type Contact = {
  name: string;
  phone_number: string | null;
  company: string | null;
  email: string | null;
};

export type Group = {
  group_id: number;
  group_name: string;
};

export type ContactGroup = {
  contact_group_id: number;
  contact_id: number;
  group_id: number;
};

export type ContactDTO = {
  contact_id: number;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  groups: string[];
};

export type GroupDTO = {
  group_id: number;
  group_name: string;
  contacts: Record<string, string>;
};

export type ContactGroupDTO = {
  contact_group_id: number;
  contact_id: number;
  group_id: number;
};

export type ErrorDetails = Record<string, string>;

export type SuccessResponse<T> = {
  code: number;
  status: string;
  data: T;
};

export type ErrorResponse<T> = {
  code: number;
  status: string;
  errors: T;
};
