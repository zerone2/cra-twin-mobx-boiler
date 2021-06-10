import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'

const SamplePage = () => {
  const history = useHistory()
  const [selectedDate, handleDateChange] = useState(new Date())
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <div className='App'>
        <h1>Calendar sample page</h1>
        {/*<h3>url = {history.location.pathname}</h3>*/}
        <div style={{ display: 'flex', flex: 'row nowrap', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <div style={{ marginRight: '10px' }}>Calendar: </div>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default SamplePage
