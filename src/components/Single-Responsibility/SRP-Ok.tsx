export type Member = {
  name: string;
  age: number;
};

export const DeatailLogger = (member: Member) => {
  if (member.age >= 45) {
    console.log(` ${member.name} is older than 45 y.o `);
  } else {
    console.log(`${member.name} is younger than 45 y.o`);
  }
};

//!! as the DetailLogger return void , it shouldn't be used as jsx-component
// the typeof DetailLogger is : (member)=>void

export const ShowMemberDetails = (member: Member) => {
  return (
    <div>
      {member.name} is {member.age} y.o
    </div>
  );
};
