import { useContext } from "react";
import UserContext from "./userContext";

function UserComponent() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {user ? (
        <>
          <p>Selamat datang, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Anda belum login.</p>
          <button onClick={() => login("Pengguna")}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserComponent;
