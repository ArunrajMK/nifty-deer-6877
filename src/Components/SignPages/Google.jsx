import style from "./all.module.css"
import React from 'react'
import Stopwatch from "./Stopwatch"

function Google(props) {
    const[show,setShow] = React.useState(false)




  return (
    <div>
    <div >
        <div >
          
          
            <div onClick={()=>setShow(false)} className={style.right_box}><p></p></div>
          
        </div>
        <div > 
        {/* {show&&<Timer {...props} />} */}
        {!show&&<Stopwatch {...props}/>}
        </div>
        {(props.status===0)?
        <div className={style.bottombox}>
            <div className={style.button}  onClick={props.start} >START</div>
            <div className={style.button} onClick={props.reset} >RESET</div>
        </div>:""}
        {(props.status===1)?
        <div className={style.bottombox}>
            <div className={style.button}  onClick={props.stop} >STOP</div>
            <div className={style.button} onClick={props.reset} >RESET</div>
        </div>:""}
        {(props.status===2)?
        <div className={style.bottombox}>
            <div className={style.button}  onClick={props.start}>START</div>
            <div className={style.button} onClick={props.reset}>RESET</div>
        </div>:""}
    </div>
   
    </div>
  )
}

export default Google