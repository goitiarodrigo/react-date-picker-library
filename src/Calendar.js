import * as React from 'react'
import Calend from './components/Calend';
import Clock from './components/Clock';
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')


export const handleSetFirstDayOfMonth = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const newDate = `${month + 1},${1},${year}`
  return new Date(newDate).getTime()
}



const Calendar = (props) => {

  const [addedDates, setAddedDates] = React.useState(0)
  const [date, setDate] = React.useState(0)

  

  const {
    direction,
    type,
    disabled,
    timestamp,
    onChangeValue,
    selectedFrom,
    backgroundMonth,
    svgFile,
    isClockEnabled,
  } = props

  const onChangeFunction = (event) => {
    onChangeValue(event)
    setDate(event)
  }


  return (
    <div className='container'>
      <div style={{width: '12rem', height: '2.7rem'}}>
        <Calend
          direction={direction}
          type={type}
          disabled={disabled}
          selectedFrom={selectedFrom}
          timestamp={timestamp}
          onChange={(event) => onChangeFunction(event)}
          backgroundMonth={backgroundMonth}
          svgFile={svgFile}
        />
      </div>
      {
        isClockEnabled ?
          <div>
            <Clock date={date} setAddedDates={setAddedDates}/>
            <div className={addedDates !== 0 ? 'hourShown' : 'withoutHour'}>
              {addedDates !== 0 ? moment(addedDates).format('LLLL') : '-----, --------------'}
            </div>
          </div> :
          null
      }
    </div>

  )
}

export default Calendar