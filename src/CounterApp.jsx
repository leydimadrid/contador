import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleNumber = () => setCounter(counter + 1);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
    <div className=" flex flex-col bg-white w-96 mx-auto rounded-2xl h-72 mt-24 shadow-md">
      <h3 className="text-center text-4xl font-bold mt-8 text-blue-600">Contador</h3>
      <h2 className="bg-gray-200 text-center font-bold mt-4 rounded-lg w-20 mx-auto py-2 shadow-md"> {counter}</h2>
      <div className="mx-auto">
      <button className="bg-blue-500 px-2 py-2 rounded-md text-white font-medium  mt-4 w-auto mr-5 shadow-md" onClick={handleNumber}>Aumentar</button>
      <button className="bg-blue-500 px-2 py-2 rounded-md text-white font-medium  mt-4 w-auto shadow-md" onClick={handleSubstract}> Disminuir</button>
      </div>
      <div className="mx-auto">
      <button className="bg-blue-500 px-2 py-2 rounded-md text-white font-medium mt-4 w-auto shadow-md" onClick={handleReset}>Resetear</button>
      </div>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
