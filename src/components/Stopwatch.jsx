import React from 'react'
import style from "./all.module.css"
function Stopwatch(props) {
console.log("props999",props)
  return (
      <div className={style.time}>
        <h1>{(props.time.h >= 10) ?  props.time.h  :"0"  +props.time.h}h</h1><br/>
        <h1>{(props.time.m >= 10) ?  props.time.m  :"0"  +props.time.m}m</h1><br/>
        <h1>{(props.time.s >= 10) ?  props.time.s  :"0"  +props.time.s}s</h1><br/>
        <h1>{(props.time.ms >= 10)? props.time.ms  :"0" +props.time.ms}ms</h1>
    </div>
  )
}

export default Stopwatch