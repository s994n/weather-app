module.exports = {
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(() => ({ pending: false })), // Mock implementation of useFormStatus
};
