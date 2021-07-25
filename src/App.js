import React from 'react';

const SlotM = (props) => {
  // let x = '😄';
  // let y = '😄';
  // let z = '😄';
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if ((x === y) && (y === z)) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Matching. </h1>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is not Matching. </h1>
          
        </div>
      </>
    )
  }

}

const arr = ['😇', '🍎', '🍓', '🍋','🥭','🤑', '👽','🧑' ,'🎄','⭐️'];

let len = arr.length;

const refreshPage = () => {
  window.location.reload();
}

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to <span style={{ fontWeight: 'bold' }}> Slot machine game </span> 🎰
      </h1>
      <div className="box">
        <SlotM x={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} y={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} z={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} /> <hr/>
        <SlotM x={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} y={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} z={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} /> <hr/>
        <SlotM x={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} y={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} z={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} /> <hr/>
        <SlotM x={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} y={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} z={arr[Math.floor(Math.random() * (len - 1 - 1) + 1)]} />
      </div>

      <button onClick={refreshPage}>Play</button>
    </>
  );
}
export default App;
