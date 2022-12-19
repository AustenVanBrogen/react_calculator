import React, {useState, useRef} from 'react';
import Wrapper from './components/Wrapper.js';
import Screen from './components/Screen.js';
import ButtonBox from './components/ButtonBox.js';
import Button from './components/Button.js';

function App() {

  const [screenVal, setScreenVal] = useState("0");
  const [calculated, setCalulated] = useState(false);
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  function doCalculation(inputString){
    console.log("The equals button was pressed");
    console.log(`The input string was ${inputString}`);
  }
  return (
    // <>
      <Wrapper>
        <Screen value={screenVal} />
        <ButtonBox>
          {
          btnValues.flat().map((btn, i) =>{
            return(
            <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() =>{
              //console.log("Pressed!");
              //console.log(btn);
              setScreenVal((prev) =>{
                if(btn === "C")
                {
                  return "0"
                }
                if(btn === "=")
                {
                  setCalulated(true);
                  doCalculation(prev);
                  return "equals was pressed";
                }
                if(prev === "0")
                {
                  return btn;
                }
                if(calculated === true)
                {
                  setCalulated(false);
                  prev = "";
                }
                return (prev + btn.toString());
              });
            }}>
            </Button>
            );
          })
        }
        </ButtonBox>
      </Wrapper>
    // </>
  );
}

export default App;
