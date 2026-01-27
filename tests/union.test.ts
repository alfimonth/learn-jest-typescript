describe("Union Type", () => {
  it("should be support in typescript", () => {
    let sample: string | number | boolean = "hanif";
    console.info(sample);

    sample = 1000;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    const proccess = (
      value: string | number | boolean
    ): string | number | boolean => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      } else {
        return !value;
      }
    };

    expect(proccess("hanif")).toBe("HANIF");
    expect(proccess(1000)).toBe(2000);
    expect(proccess(true)).toBe(false);
  });
});
