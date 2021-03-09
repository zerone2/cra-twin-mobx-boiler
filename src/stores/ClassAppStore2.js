import { makeAutoObservable } from 'mobx'

class ClassAppStore2 {
  constructor() {
    makeAutoObservable(this)
  }

  appInfo = {
    title: 'Hello React'
  }

  changeAppTitle = (title) => {
    this.appInfo.title = title
  }
}

const classAppStore2 = new ClassAppStore2()
export default classAppStore2
