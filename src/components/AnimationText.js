import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "AA Muhammadi",
          "a mern stack developer",
          "a seo specialist",
          "a digital marketer",
          "a blogger",
          "a youtuber",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
