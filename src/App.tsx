import './styles.css';
import { Landing } from '@/components/landing';
import {
    ListExample,
    FormExample,
    PageGeneratorExample,
} from '@/components/examples';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <ListExample />
                <FormExample />
                <PageGeneratorExample />
            </main>
        </QueryClientProvider>
    );
}

export default App;
