import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Muhammad Irfan",
          "learning a mern stack developer",
          "a seo specialist",
    
          "a blogger",
          
        ]}
      />
    </h1>
  );
};
export default AnimationText;
