describe("Object", () => {
  it("should support in typescript", () => {
    const person: {
      id: number;
      name: string;
      age: number;
      hobbies?: string[];
    } = {
      id: 1,
      name: "hanif",
      age: 20,
    };
    console.info(person);

    person.age = 30;

  });
});
