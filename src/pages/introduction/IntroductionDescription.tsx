import "../../styles/introduction/IntroductionDescription.css";

const IntroductionDescription = (state) => {
  const user = state.location.state;
  return <div className="container">{user}</div>;
};

export default IntroductionDescription;
