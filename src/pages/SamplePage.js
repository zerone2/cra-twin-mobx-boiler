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
        <div>- Calendar -</div>
        <div style={{ display: 'flex', flex: 'column nowrap', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          <div style={{marginRight: '35px'}}/>
          <DatePicker
            variant="inline"
            label="Basic example"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <div style={{marginRight: '35px'}}/>
          <DatePicker
            disableToolbar
            variant="inline"
            label="Only calendar"
            helperText="No year selection"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default SamplePage
