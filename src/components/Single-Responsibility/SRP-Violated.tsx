type Member = {
  name: string;
  age: number;
};

export const ShowMemberDetails = (member: Member) => {
  if (member.age >= 45) {
    console.log(` ${member.name} is older than 45 y.o `);
  } else {
    console.log(`${member.name} is younger than 45 y.o`);
  }

  return (
    <div>
      {member.name} is {member.age} y.o
    </div>
  );
};
