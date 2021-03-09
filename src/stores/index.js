import { createContext, useContext } from 'react'
import classAppStore from 'stores/ClassAppStore'
import classAppStore2 from 'stores/ClassAppStore2'
import { useLocalObservable } from 'mobx-react-lite'

export const useStores = () => {
  return { classAppStore, classAppStore2 }
}

export const stores = {
  classAppStore,
  classAppStore2
}

// export const StoresContext = createContext({
//   ...stores
// })

export const StoresContext = createContext({})

export const StoreProvider = ({ children }) => {
  const value = useLocalObservable(() => ({
    ...stores
  }))
  return <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
}

export const useStores2 = () => {
  const store = useContext(StoresContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}
