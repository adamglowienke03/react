import { Child } from "./Child";

export function Parent() {
    console.log('Father component rendered')

  return (
    <>
      <h2>I am a parent</h2>
      <Child />
    </>
  );
}