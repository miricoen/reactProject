import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
} from "mobx";
class BusinessStore {
  id = 123;
  name = "העסק הנבחר";
  address = "בני ברק";
  phone = "0556744853";
  owner = "מירי כהן";
  logo =
    "https://static.wixstatic.com/media/dbd887_6ea7b9e82db445cfaaf7db1311c3b181~mv2.jpg/v1/fill/w_560,h_372,al_c,q_90,enc_auto/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20%D7%9C%D7%90%D7%AA%D7%A8%20%D7%9C%D7%97%D7%99%D7%A6%D7%AA%20%D7%99%D7%93%D7%99%D7%99%D7%9D.jpg";
  description = "העסק המיוחד שלי לשום דבר...";

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
