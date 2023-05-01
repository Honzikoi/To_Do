// let localStore;

// beforeEach(() => {
//   localStore = {};


// // spyOn(window.localStorage, 'getItem').and.callFake((key) => 
// //   key in localStore ? localStore[key] : null
// // );

// const setLocalStorage = (id, data) => {
//   window.localStorage.setItem(id, JSON.stringify(data));
// };


// describe("localStorage tests", () => {
//   beforeEach(() => {
//     window.localStorage.clear();
//   });

//   test("data is added into local storage", () => {
//     const mockId = "0";
//     const mockJson = { description: "" };
//     setLocalStorage(mockId, mockJson);
//     expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
//   });

//   expect(JSON.parse(localStorage.getItem("todo-test"))).toEqual([
//     { description: "", completed: false },
//   ]);
// });

// });

const { addItem } = require('./todo');

describe('addItem', () => {
  it('should add an item to the items array', () => {

    const initialItems = [{ description: 'Task 1', completed: false }];
    const expectedItems = [
      { description: 'New Task', completed: false },
      { description: 'Task 1', completed: false }
    ];

    jest.spyOn(window.localStorage, 'getItem').mockReturnValue(JSON.stringify(initialItems));
    jest.spyOn(window.localStorage, 'setItem').mockImplementation(() => {});

    addItem();

    expect(JSON.parse(window.localStorage.setItem.mock.calls[0][1])).toEqual(expectedItems);
  });
});
