import { useLang } from "./contexts/LangContext";

import Router from "./router";

function App() {
  const { lang } = useLang();

  return (
    <>
      <Router lang={lang} />
    </>
  );
}

export default App;
