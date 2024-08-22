import { useContext, useState } from "react";
import ThemeContext from "./themeContext";

function ThemedComponent() {
  // Menggunakan useContext untuk mengakses nilai context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // State untuk counter
  const [count, setCount] = useState(0);

  // Menentukan gaya berdasarkan nilai context
  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    textAlign: "center",
  };

  // Fungsi untuk menambah nilai counter
  const increment = () => setCount(count + 1);

  // Fungsi untuk mengurangi nilai counter
  const decrement = () => setCount(count - 1);

  // Fungsi untuk mereset nilai counter ke 0
  const reset = () => setCount(0);

  return (
    <div style={style}>
      <p>Tema saat ini: {theme}</p>
      <p>Counter: {count}</p>
      {/* Tombol untuk mengganti tema */}
      <button onClick={toggleTheme}>Ganti Tema</button>
      <br />
      {/* Tombol untuk increment, decrement, dan reset */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ThemedComponent;
