import ChoiseSection1 from "./component/Section/ChoiseSection1";
import ChoiseSection2 from "./component/Section/ChoiseSection2";
import ChoiseSection3 from "./component/Section/ChoiseSection3";
import ChoiseSection4 from "./component/Section/ChoiseSection4";
import ChoiseSection5 from "./component/Section/ChoiseSection5";
import ChoiseSection6 from "./component/Section/ChoiseSection6";
import ChoiseSection7 from "./component/Section/ChoiseSection7";
import ChoiseSection8 from "./component/Section/ChoiseSection8";

const sections = [
  ChoiseSection1,
  ChoiseSection2,
  ChoiseSection3,
  ChoiseSection4,
  ChoiseSection5,
  ChoiseSection6,
  ChoiseSection7,
  ChoiseSection8
];

export default function App() {
  return (
    <div className="App">
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}