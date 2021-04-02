import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["One", "Two", "Three", "One"];
  const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>);
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
  const personsList = persons.map(person => <Person key={person.id} person={person} />);
     return <div>{nameList}</div>;
  //return <div>{personsList}</div>;
}

export default NameList;
