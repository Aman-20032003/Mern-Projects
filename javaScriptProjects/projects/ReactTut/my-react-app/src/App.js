

function App(value1, value2) {
  return value1 + value2;
}

function Component(){
  return <h2>the  total sum is : {App(10,20)}</h2>
}

export default Component;
