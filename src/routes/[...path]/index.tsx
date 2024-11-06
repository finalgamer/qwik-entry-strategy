import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const path = useLocation();

  const resource = useResource$(async ({ track }) => {
    track(path);

    return new Date().toLocaleTimeString();
  });

  const ResourceComponent = component$(({ value }: { value: string }) => {
    return (
      <>
        {value}
        Custom Page <Link href="/sport">Test</Link>
      </>
    );
  });

  return (
    <div>
      <Resource
        value={resource}
        onPending={() => <>loading</>}
        onResolved={(value) => <ResourceComponent value={value} />}
      />
    </div>
  );
});
