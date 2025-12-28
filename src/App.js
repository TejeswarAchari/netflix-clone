import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/clerk-react';
import Body from './components/Body';
import appStore from './utils/appStore';


// Access the key from environment variables
// IF USING VITE:
// const PUBLISHABLE_KEY = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
// IF USING CRA (Create React App), USE THIS INSTEAD:
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </ClerkProvider>
  );
}

export default App;