import { makeObservable, observable, action } from 'mobx'

class ClassAppStore {
  constructor() {
    makeObservable(this, {
      appInfo: observable,
      changeAppTitle: action
    })
  }
  appInfo = {
    title: 'Hello React'
  }

  changeAppTitle = (title) => {
    this.appInfo.title = title
  }
}

const classAppStore = new ClassAppStore()
export default classAppStore
