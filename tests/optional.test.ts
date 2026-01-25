describe("Optional Parameter", () => {
  it("should be support null and undefined", () => {
    const sayHello = (name?: string): void => {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    };
    sayHello("hanif");

    const name: string | undefined = undefined;
    sayHello(name); 
  });
});
