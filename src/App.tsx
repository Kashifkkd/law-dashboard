import ErrorBoundary from "./components/errors/ErrorBoundary";
import Layout from "./components/layout";

function App() {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
