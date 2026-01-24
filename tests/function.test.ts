describe("Function", () => {
  it("Should be support in typescript", () => {
    const sayHello = (name: string): string => {
      return `Hello ${name}`;
    };

    expect(sayHello("Hanif")).toBe("Hello Hanif");

    const printHello = (name: string): void => {
      console.info(`Hello ${name}`);
    };

    printHello("Hanif");
  });

  it("should support default value", () => {
    const sayHello = (name: string = "Guest") => {
      return `Hello ${name}`;
    };

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Hanif")).toBe("Hello Hanif");
  });

  it("should support rest parameters", () => {
    const sum = (...values: number[]): number => {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    };

    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  it("should support optional parameters", () => {
    const sayHello = (firsName: string, lastName?: string): string => {
      if (lastName) {
        return `Hello ${firsName} ${lastName}`;
      } else {
        return `Hello ${firsName}`;
      }
    };
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      }
    }

    expect(callMe("hanif")).toBe("HANIF");
    expect(callMe(1000)).toBe(2000);
  });

  it("should suppor function as parameter", () => {
    const sayHello = (name: string, fn: (name: string) => string): string => {
      return `Hello ${fn(name)}`;
    };

    const upperCase = (value: string): string => {
      return value.toUpperCase();
    };

    expect(sayHello("hanif", upperCase)).toBe("Hello HANIF");
  });

  it("should support anonymous function", () => {
    const sayHello = (name: string, fn: (name: string) => string): string => {
      return `Hello ${fn(name)}`;
    };

    expect(sayHello("hanif", (name: string) => name.toUpperCase())).toBe(
      "Hello HANIF"
    );
  });
});
