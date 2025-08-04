import React from "react";
import { MoralisProvider, useMoralis } from "react-moralis";

const APP_ID = "YOUR_APP_ID";
const SERVER_URL = "YOUR_SERVER_URL";

function LoginButton() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => authenticate()}>Login with MetaMask</button>
      ) : (
        <div>
          <p>Welcome {user.get("ethAddress")}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>QXMP PAY (Moralis Edition)</h1>
        <LoginButton />
      </div>
    </MoralisProvider>
  );
}

export default App;