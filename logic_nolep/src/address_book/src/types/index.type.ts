export interface Contact {
  contact_id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
}

export interface Groups {
  group_id: number;
  group_name: string;
}

export interface ContactGroups {
  contact_group_id: number;
  contact_id: string;
  group_id: number;
}

export type AppResponse<T> =
  | {
      success: true;
      message: string;
      data: T;
    }
  | {
      success: false;
      message: string;
      error?: unknown;
    };
