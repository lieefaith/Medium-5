import { ThemeProvider } from "./themeContext";
import { UserProvider } from "./userContext";
import ThemedComponent from "./themedComponent";
import UserComponent from "./UserComponent";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ThemedComponent />
        <UserComponent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
