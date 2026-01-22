describe("Array", () => {
  it("should be array", () => {
    const names: string[] = ["hanif", "daffa"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly  array", () => {
    const hobbies: ReadonlyArray<string> = ["coding", "sleeping"];

    console.info(hobbies);
  });

  it("should support tuple", () => {
    const person: readonly [number, string, boolean] = [1, "hanif", true];

    console.info(person);
  });
});
