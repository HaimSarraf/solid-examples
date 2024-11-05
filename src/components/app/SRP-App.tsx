import {
  DeatailLogger,
  ShowMemberDetails,
  type Member,
} from "../Single-Responsibility/SRP-Ok";

const Patrik: Member = {
  age: 22,
  name: "Patrick",
};

export default function SRP() {
  DeatailLogger(Patrik);
  return (
    <div>
      <ShowMemberDetails name={Patrik.name} age={Patrik.age} />
    </div>
  );
}
