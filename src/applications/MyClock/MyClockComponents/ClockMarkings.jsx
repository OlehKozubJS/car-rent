import { ClockMarkingItem } from "./ClockMarking";

const ClockMarkings = () => {
  const spawn = () => {
    let markings = [];
    for (let marking = 1; marking <= 60; marking += 1) {
      markings = [
        ...markings,
        <ClockMarkingItem key={marking} marking={marking} />,
      ];
    }

    return markings;
  };

  return <div>{spawn()}</div>;
};

export { ClockMarkings };
