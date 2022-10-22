import * as React from 'react'
import { mathOperation } from '../operationFunction'
import '../styles/calendar.scss'
import { minusSvg, plusSvg } from '../svgFiles/arrow'

const Clock = (props) => {

    const [clockValue, setClockValue] = React.useState({hour: 0, minute: 0})

    const handleChangeClockValue = (name, operation) => {
        setClockValue(prevState =>  {
            return {...clockValue, [name]: mathOperation[operation](prevState[name], 1)}
        })
    }

    const handleSumDate = () => {
        props.setAddedDates(props.date + ((clockValue.hour * 60) + clockValue.minute) * 60000)
    }

    const handleChangeInputValue = (e) => {
        const { value, name, min, max } = e.target
        setClockValue({...clockValue, [name]: (Number(value) < Number(min) || Number(value) > Number(max)) ? 0 : Number(value)})
    }

    return (
        <div className='clock-container'>
            <div className='time-value-container'>
                <button style={{cursor: clockValue.hour === 23 ? 'not-allowed' : 'pointer'}} disabled={clockValue.hour === 23} onClick={() => handleChangeClockValue('hour', 'add')}>{plusSvg}</button>
                    <input
                        min='0'
                        max='23'
                        type='number'
                        name='hour'
                        value={clockValue.hour}
                        onChange={(e) => handleChangeInputValue(e)}
                    />
                <button style={{cursor: clockValue.hour === 0 ? 'not-allowed' : 'pointer'}} disabled={clockValue.hour === 0} onClick={() => handleChangeClockValue('hour', 'subtract')}>{minusSvg}</button>
            </div>
            <div className='time-value-container'>
                <button style={{cursor: clockValue.minute === 59 ? 'not-allowed' : 'pointer'}} disabled={clockValue.minute === 59} onClick={() => handleChangeClockValue('minute', 'add')}>{plusSvg}</button>
                    <input
                        min='0'
                        max='59'
                        type='number'
                        value={clockValue.minute}
                        name='minute'
                        onChange={(e) => handleChangeInputValue(e)}
                    />
                <button style={{cursor: clockValue.minute === 0 ? 'not-allowed' : 'pointer'}} disabled={clockValue.minute === 0} onClick={() => handleChangeClockValue('minute', 'subtract')}>{minusSvg}</button>
            </div>
            <button className='button-done' onClick={handleSumDate}>Hecho</button>
        
        </div>
    )
}

export default Clock