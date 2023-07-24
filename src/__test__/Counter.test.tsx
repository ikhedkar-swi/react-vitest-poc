import { describe, expect, test } from "vitest";
import { create } from "react-test-renderer";
import { Counter } from "../Counter";

describe("Counter", () => {
  test("should show click count as 0 on initial render", () => {
    const counter = create(<Counter />);
    expect(counter).toMatchSnapshot();
  });

  test("should show the incremented counter on button clicks", async () => {
    const counter = create(<Counter />);
    const instance = counter.root;
    const button = await instance.findByType("button");
    const counterTextElem = await instance.findByProps({ id: "labelCounter" });

    expect(counter.toJSON()).toMatchSnapshot();
    expect(counterTextElem.props.children).toEqual([
      "You clicked ",
      0,
      " times",
    ]);
    expect(button.props.children).toBe("Click me!");

    button.props.onClick();
    expect(counter.toJSON()).toMatchSnapshot();
    expect(counterTextElem.props.children).toEqual([
      "You clicked ",
      1,
      " times",
    ]);

    button.props.onClick();
    expect(counter.toJSON()).toMatchSnapshot();
    expect(counterTextElem.props.children).toEqual([
      "You clicked ",
      2,
      " times",
    ]);

    button.props.onClick();
    button.props.onClick();
    button.props.onClick();
    expect(counter.toJSON()).toMatchSnapshot();
    expect(counterTextElem.props.children).toEqual([
      "You clicked ",
      5,
      " times",
    ]);
  });
});
