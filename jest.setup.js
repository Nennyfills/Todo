window.IntersectionObserver = {
  observe: true,
  unobserve: () => null,
  disconnect: () => null
};

window.IntersectionObserver = class MockIntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }
};
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }
};
