import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>
      <Link href="/sport">Test1</Link>
      <Link href="/sport/test">Test2</Link>

      <Slot />
    </>
  );
});
