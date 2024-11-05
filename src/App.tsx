import {
  DeatailLogger,
  Member,
  ShowMemberDetails,
} from "./components/Single-Responsibility/SRP-Ok";

const member: Member = {
  age: 22,
  name: "Patrik",
};

function App() {
  DeatailLogger(member);
  return (
    <div>
      <ShowMemberDetails age={member.age} name={member.name} />
    </div>
  );
}

export default App;
