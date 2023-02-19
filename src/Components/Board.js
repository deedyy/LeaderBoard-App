import React, { useState } from 'react'
import StudentProfile from './Studentprofiles';
import StudentList from './studentlist';

 function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {

    setPeriod()
  }

  return (
    <div className="board">
        

        <div className="duration">
            <button onClick={handleClick} data-id='1'>Week1</button>
            <button onClick={handleClick} data-id='2'>Week2</button>
            <button onClick={handleClick} data-id='3'>Week3</button>
        </div>

        
    </div>
  )
}



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between === 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
        
    })

}
export default Board;