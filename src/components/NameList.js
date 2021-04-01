import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["One", "Two", "Three"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "One",
      age: 30,
      skills: ["ReactJS", "HTML"],
    },
    {
      id: 2,
      name: "Two",
      age: 32,
      skills: ["AngularJS", "HTML", "CSS"],
    },
    {
      id: 3,
      name: "Three",
      age: 28,
      skills: ["ReactJS", "HTML", "UI UX"],
    },
  ];
  const personsList = persons.map(person => <Person person={person} />);
  //   return <div>{nameList}</div>;
  return <div>{personsList}</div>;
}

export default NameList;
