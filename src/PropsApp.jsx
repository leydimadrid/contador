import PropTypes from "prop-types";

export const PropsApp = ({ titulo, parrafo }) => {
  // console.log(props)

  return (
    <>
      <h1>{titulo}</h1>
      <p>{parrafo}</p>
    </>
  );
};

PropsApp.propTypes = {
  titulo: PropTypes.string.isRequired,
  parrafo: PropTypes.string.isRequired,
};

PropsApp.defaultProps = {
  titulo: "Soy un título",
  parrafo: " Soy un parrafo",
};
