export interface Contact {
  id: number;
  name: string;
  nickname?: string;
  tel: string;
  email: string;
}

export type ContactWithoutId = Omit<Contact, "id">;
