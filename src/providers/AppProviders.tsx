import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "../components/error/ErrorFallback"
import { MantineProviders } from "./MantineProviders"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/react-query"



function AppProviders({ children }: { children: React.ReactNode }) {

  return (
      <ErrorBoundary fallback={<ErrorFallback onClick={() => window.location.assign(window.location.origin)}/>}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <MantineProviders>
                {children}
              </MantineProviders>
            </BrowserRouter>
          </QueryClientProvider>
      </ErrorBoundary>
  )
}


export default AppProviders