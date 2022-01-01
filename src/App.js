import "./App.scss";
import Nav from "./component/Nav/Nav";
import SportNav from "./component/SportNav/SportNav";
import User from "./component/User/User";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <SportNav />
        <div className="main-content">
          <User />
          <Profile />
        </div>
      </main>
    </div>
  );
}

export default App;
