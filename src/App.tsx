import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PageTemplate from "./components/Common/PageTemplate";
import Router from "./router";
import { ToastProvider } from "react-toast-notifications";

function App() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: 1000 * 60 * 60,
        cacheTime: 1000 * 60 * 60,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ToastProvider>
            <PageTemplate>
              <Router />
            </PageTemplate>
          </ToastProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
