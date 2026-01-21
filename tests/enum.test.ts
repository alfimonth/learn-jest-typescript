import { CustomerType, type Custumer } from "../src/enum"

describe('Enum', () => {
  it('should be support in typescript', () => {
    const customer: Custumer = {
      id: 1,
      name: 'hanif',
      type: CustomerType.SILVER
    }

    console.info(customer);
  })
})