import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
} from "mobx";
import { json } from "react-router-dom";
// const service1 = {
//   id: "11",
//   name: "פגישת ייעוץ פרונטלית",
//   description: "פגישת ייעוץ פרטנית בקליניקה",
//   price: 250,
//   duration: 45,
// };
// const service2 = {
//   id: "11",
//   name: "פגישת ייעוץ פרונטלית",
//   description: "פגישת ייעוץ פרטנית בקליניקה",
//   price: 550,
//   duration: 60,
// };
class ServiceStore {
  // list = [service1];
  baseUrl;
  constructor() {
    makeObservable(this, {
      // list: observable, // משתנה שניתן להשגיח על השינויים בו
      addService: action, 
      getServiceList: computed,
    });
    this.baseUrl = "http://localhost:8787/";
    this.initData();
  }

  initData() {
    fetch("http://localhost:8787/services")
      .then((res) => {
        res.json().then((data) => {
          runInAction(() => {
            this.list = data;
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

   get getServiceList() {
    return fetch("http://localhost:8787/services")
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
  }


  addService(serviceItem) {
    return new Promise((resolve) => {
      fetch("http://localhost:8787/service", {
        method: "POST",
        body: JSON.stringify({
          id:"234",
          name: serviceItem.name,
          description: serviceItem.description,
          price: serviceItem.price,
          duration: serviceItem.duration
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            // this.list.push(serviceItem);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          console.log("error" + error);
          resolve(false);
        });
    });
  }


}
export default new ServiceStore();
