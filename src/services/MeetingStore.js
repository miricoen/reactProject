import {
  observable,
  action,
  computed,
  makeObservable,
  runInAction,
} from "mobx";

class MeetingStore {
  list = [
    {
      id: "758",
      serviceType: "11",
      dateTime: "2029-06-20T10:00:00.000Z", 
      clientName: "אבי כהן",
      clientPhone: "050-1234567",
      clientEmail: "m@m.com",
    },

    {
      id: "787658",
      serviceType: "411",
      dateTime: "2024-01-02T10:00:00.000Z", 
      clientName: "אביב כהן",
      clientPhone: "050-12374567",
      clientEmail: "my@m.com",
    },
    {
      id: "789658",
      serviceType: "4345",
      dateTime: "2024-01-06T10:00:00.000Z", 
      clientName: "שושנה וייס",
      clientPhone: "050-54387667",
      clientEmail: "shoshana@gmail.com",
    },
    {
      id: "789658",
      serviceType: "4345",
      dateTime: "2024-01-09T10:00:00.000Z", 
      clientName: "שרי אייזנשטיין",
      clientPhone: "050-54387667",
      clientEmail: "shoshana@gmail.com",
    }

  ];
  baseUrl;
  constructor() {
    makeObservable(this, {
      list: observable, 
      addMeeting: action, 

      getMeetingList: computed,
    });
    this.baseUrl = "http://localhost:8787/appointments";
    this.initData();
  }

  initData() {
    fetch(this.baseUrl)
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

  addMeeting(meetingItem) {
    fetch(this.baseUrl, {
      method: "POST",
      body: meetingItem,
    })
      .then((res) => {
        this.list.push(meetingItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get getMeetingList() {
    return this.list;
  }
}
export default new MeetingStore();
