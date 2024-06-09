import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
} from "mobx";
class BusinessStore {
  id = 123;
  name = "My business";
  address = "Shivtey Ysrael 10";
  phone = "0556744853";
  owner = "MIRI";
  logo =
    "https://img.freepik.com/free-vector/flat-design-mc-logo-design_23-2149482035.jpg";
  description = "my spacial business for help everione";

  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
      address: observable,
      phone: observable,
      owner: observable,
      logo: observable,
      description: observable,

      setId: action,
      setName: action,
      setAddress: action,
      setPhone: action,
      setOwner: action,
      setLogo: action,
      setDescription:action
    });
  }

  setId(id) {
    this.id = id;
  }
  setName(name) {
    this.name = name;
  }
  setAddress(address) {
    this.address = address;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  setOwner(owner) {
    this.owner = owner;
  }
  setLogo(logo) {
    this.logo = logo;
  }
  setDescription(description){
    this.description=description;
  }
}

export default new BusinessStore();
