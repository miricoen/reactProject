import { observable, action, makeObservable } from "mobx";

class UserStore {
  admin = true;

  constructor() {
    makeObservable(this, {
      admin: observable, // משתנה שניתן להשגיח על השינויים בו
      setAdmin:action,
    });
  }

  setAdmin(){

    this.admin=false;
  }
}

export default new UserStore();
