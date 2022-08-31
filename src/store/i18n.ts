import { defineStore } from "pinia";
import { EmailForm } from '../../models/EmailForm';

export type RootState = {
  lang: string,
  items: EmailForm[];
};

export const useI18NStore = defineStore({
  id: "I18NStore",
  state: () =>
  ({
    items: [],
    lang: "Español"
  } as RootState),

  actions: {
    changeLanguage() {
      if (this.lang === "Español") {
        this.lang = "English"
      } else {
        this.lang = "Español"
      }
    },

    createNewItem(item: EmailForm) {
      if (!item) return;

      this.items.push(item);
    },

    updateItem(id: string, payload: EmailForm) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = {
          email: "",
          message: "",
          subject: "",
          to: ""
        } as EmailForm;
      }
    },

    deleteItem(email: string) {
      const index = this.findIndexById(email);

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    findIndexById(email: string) {
      return this.items.findIndex((item) => item.email === email);
    },
  },
});