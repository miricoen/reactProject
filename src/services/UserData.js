import { observable, action, makeObservable } from "mobx";

class UserStore {
  admin = false;

  constructor() {
    makeObservable(this, {
      admin: observable, // משתנה שניתן להשגיח על השינויים בו
      setAdmin:action,
    });
  }

  setAdmin(){
    this.admin=true;
  }
}

export default new UserStore();
