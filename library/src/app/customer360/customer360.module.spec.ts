import { Customer360Module } from './customer360.module';

describe('Customer360Module', () => {
  let customer360Module: Customer360Module;

  beforeEach(() => {
    customer360Module = new Customer360Module();
  });

  it('should create an instance', () => {
    expect(customer360Module).toBeTruthy();
  });
});
