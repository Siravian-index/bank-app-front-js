import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "../components/error/ErrorFallback"
import { MantineProviders } from "./MantineProviders"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/react-query"
import AuthProvider from 'react-auth-kit';
import { store } from "../lib/auth"


function AppProviders({ children }: { children: React.ReactNode }) {

  return (
    <ErrorBoundary fallback={<ErrorFallback onClick={() => window.location.assign(window.location.origin)} />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider store={store}>
            <MantineProviders>
              {children}
            </MantineProviders>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}


export default AppProviders