import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageTemplate from "./components/Common/PageTemplate";
import Router from "./router";
import { RollingToastProvider } from "@stubee2/stubee2-rolling-toastify";

function App() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <RollingToastProvider>
            <PageTemplate>
              <Router />
            </PageTemplate>
          </RollingToastProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
