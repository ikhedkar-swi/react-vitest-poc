import { expect, test } from "vitest";
import { create } from "react-test-renderer";
import App from "../App";

test("renders learn react link", async () => {
  const app = create(<App />);
  const instance = app.root;
  const learnReactLink = await instance.findByProps({ className: "App-link" });

  expect(learnReactLink.props).toEqual({
    children: "Learn React",
    className: "App-link",
    href: "https://reactjs.org",
    rel: "noopener noreferrer",
    target: "_blank",
  });
  expect(app).toMatchSnapshot();
});
