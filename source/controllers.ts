import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params?: any;
};

class ContactsController {
  contacts;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {

    if (options.action == "get" && options.params.id != null) {
      const contactoPorID = this.contacts.getOneById(options.params.id);
      return contactoPorID;

    } 
    
    if (options.action == "get" && options.params.id == null) {
      return this.contacts.getAll();

    }
    
    if (options.action == "save") {
      return this.contacts.addOne(options.params);
    }

  }
}

export { ContactsController };
