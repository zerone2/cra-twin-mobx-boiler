import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import tw, { styled } from 'twin.macro'
import { useStores } from 'stores'
import 'App.css'
import logo from 'logo.svg'

const Input = tw.input`border hover:border-black px-2 outline-none`
const PurpleInput = tw(Input)`border-purple-500 text-purple-700`
const StyledP = styled.p(({ isPurple }) => [`color: black;`, isPurple && tw`text-purple-700`])
const StyledDiv = styled.div`
  color: black;
  ${({ isPurple }) => isPurple && tw`text-purple-700`}
`

const MainPage = observer(() => {
  const { classAppStore, classAppStore2 } = useStores()
  const { appInfo: appInfo2, changeAppTitle: changeAppTitle2 } = classAppStore2
  const { appInfo, changeAppTitle } = classAppStore
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>makeObservable class store</p>
        <div tw={'my-2 font-bold'}>Title: {appInfo.title}</div>
        <input css={[tw`rounded-2xl hocus: (outline-none) text-black`]} onChange={(e) => changeAppTitle(e.currentTarget.value)} />
        <StyledP isPurple={false}>makeAutoObservable class store</StyledP>
        <StyledDiv isPurple>Title: {appInfo2.title}</StyledDiv>
        <PurpleInput onChange={(e) => changeAppTitle2(e.currentTarget.value)} />
        <Link to={'/sample'}>
          <button tw={'mt-5 px-5 py-2 rounded-3xl bg-white text-black hocus:(outline-none)'}>click to go sample page</button>
        </Link>
      </header>
    </div>
  )
})

export default MainPage
