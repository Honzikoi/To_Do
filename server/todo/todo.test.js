let localStore;

beforeEach(() => {
  localStore = {};


// spyOn(window.localStorage, 'getItem').and.callFake((key) => 
//   key in localStore ? localStore[key] : null
// );

// spyOn(window.localStorage,'setItem').and.callFake((key, value) => 
//   (localStore[key] = value + '')
// );

// spyOn(window.localStorage,'removeItem').and.callFake((key) => 
//   delete localStore[key]);



describe("adds an item to local storage", () => {
  addItem();

  expect(JSON.parse(localStorage.getItem("todo-test"))).toEqual([
    { description: "", completed: false },
  ]);
});

});