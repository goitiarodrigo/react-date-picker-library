# react-date-picker-library
This is a library for react. It is a library created entirely by me to be able to choose the date and time and be able to implement it on your page.

### Installation 🔧

```javascript
yarn add react-pick-date-calendar
```
or 
```javascript
npm i react-pick-date-calendar
```

### Usage 🔧


```javascript
import Calendar from 'react-pick-date-calendar'
```

## Example code 🚀

```javascript
import Calendar from 'pick-date-calendar-react'
import { useState } from 'react'


const App = () => {
  const [date, setDate] = useState({to: undefined, from: undefined})

  
  return (
    <div className='container'>
        <Calendar
          direction={'right'}
          type={'from'}
          disabled={false}
          timestamp={Date.now()}
          onChangeValue={(event: number) => setDate({...date, from: event})}
          isClockEnabled={true}
        />
    </div>
  )
}

export default App
```

## Example image 🚀

<p align="center">
  <img width="460" height="300" src="https://i.postimg.cc/Nf9FtQDL/image.png">
</p>

### Variable types 🔧

|   Variable    |     Type      |  what do |
| ------------- | ------------- |------------|
|   direction   |top, bottom, right, left| Calendar position |
|      type     |  from, to     | What is the type of calendar |
|    disabled   |    boolean    | Enable or disabled input to display calendar |
|   timestamp   |    number     | Initiar date |
| onChangeValue |  (number) =>  | function that receives the date |
| selectedFrom  |    number     | If is type "to" need receive date from for don't allow previous date |
|backgroundMonth|    string     | Color for background month |
|    svgFile    |  JSX.Element  | svg tag |
| isClockEnabled|   boolean     | For enable or disable clock picker |
