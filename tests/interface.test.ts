import type { Employee, Manager } from "../src/employee";
import type { Person } from "../src/person";
import type { Seller } from "../src/seller";

describe("Interface", () => {
  it("should be support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "hanif",
      nib: "1234567890",
      npwp: "1234567890",
    };

    seller.name = "daffa";
    seller.address = "Jakarta";

    console.info(seller);
  });

  it("should support typeof operator", () => {
    const seller: Seller = {
      id: 1,
      name: "hanif",
      nib: "1234567890",
      npwp: "1234567890",
    };

    console.info(typeof seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const addFunction: AddFunction = (value1, value2) => {
      return value1 + value2;
    };

    expect(addFunction(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["hanif", "daffa"];
    console.info(names);
  });

  it("should support indexable interface for non number", () => {
    interface StringDictionary {
      [index: string]: string;
    }

    const names: StringDictionary = {
      name: "hanif",
      address: "Jakarta",
    };

    expect(names["name"]).toBe("hanif");
    expect(names.address).toBe("Jakarta");
  });

  it("should support class implements", () => {
    const employe: Employee = {
      id: 1,
      name: "hanif",
      division: "IT",
    };
    console.info(employe);

    const manager: Manager = {
      id: 1,
      name: "hanif",
      division: "IT",
      teamSize: 10,
    };
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "hanif",
      sayHello: function (name: string): string {
        return `Hello ${name}, My name is ${this.name}`;
      },
    };
    console.info(person.sayHello("daffa"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "1",
      name: "Hanif",
    };

    console.info(domain);
  });

  it("should support assertions type", () => {
    const person: any = {
      name: "Hanif",
      age: 30,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
