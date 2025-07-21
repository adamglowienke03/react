import { Parent } from "./Parent";

export function Grandparent() {
    console.log('Grandfather component rendered')
    return (
        <>
            <h1>I am a grandfather</h1>
            <Parent />
        </>
    );
}