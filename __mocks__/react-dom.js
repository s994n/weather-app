module.exports = {
  ...jest.requireActual('react-dom'), // This will import all of the exports from the actual react-dom module
  useFormStatus: jest.fn(() => ({ pending: false })), // Mock implementation of useFormStatus
};