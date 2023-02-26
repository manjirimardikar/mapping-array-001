import "./App.css";
function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function App() {
  return (
    <div className="App">
      <div className="top">
        <h1>30 Days Of React</h1>
        <h2>Number Generator</h2>
      </div>
      <div className="middle">
        {Array(32)
          .fill("")
          .map((e, i) => {
            return (
              <div
                className="box"
                style={{
                  backgroundColor: isPrime(i)
                    ? "#fd5e53"
                    : i % 2 === 0
                    ? "#21bf73"
                    : "#fddb3a",
                }}
              >
                {i}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;