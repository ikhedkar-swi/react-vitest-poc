import { expect, test, vi, afterEach } from "vitest";
import renderer from "react-test-renderer";
import Todos from "../Todos";

afterEach(() => {
  vi.restoreAllMocks();
});

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        todos: [
          {
            id: 1,
            todo: "Do something nice for someone 😉",
            completed: true,
            userId: 26,
          },
        ],
        total: 150,
        skip: 0,
        limit: 30,
      }),
  })
);

test("renders todos", async () => {
  let component: any;

  await renderer.act(() => {
    component = renderer.create(<Todos />);
  });

  expect(component.toJSON()).toMatchSnapshot();

  renderer.act(() => {
    component?.unmount();
  });
});
