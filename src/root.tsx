import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <script
          dangerouslySetInnerHTML={`
                    window.symbols = [];
                    document.addEventListener('qsymbol', (e) => window.symbols.push(e.detail));
                `}
        ></script>
      </head>
      <body>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
