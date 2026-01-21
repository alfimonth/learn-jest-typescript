describe("Any", () => {
  it("should be support in typescript", () => {
    const person: any = {
      id: 1,
      name: "hanif",
      age: 20,
    };

    person.age = 30;
    person.address = "Jakarta";

    console.info(person);
  });
});
