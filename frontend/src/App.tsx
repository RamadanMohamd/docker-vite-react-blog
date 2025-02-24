import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Hero } from './components';
import { MainLayout } from './layout';
import { BlogsContainer } from './containers';
import './App.css'

function App() {
  const queryClient = new QueryClient()
  return (

    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
          <Hero />
          <BlogsContainer />
      </QueryClientProvider>
    </MainLayout>
  )
}

export default App;