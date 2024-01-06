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
    "https://onlinegraphic.co.il/wp-content/uploads/2017/08/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%9C%D7%95%D7%92%D7%95.jpg";
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
