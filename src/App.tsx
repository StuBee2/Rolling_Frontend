import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Provider from "./components/Common/Provider";
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
            <Provider>
              <Router />
            </Provider>
          </RollingToastProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
