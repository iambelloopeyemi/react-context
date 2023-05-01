import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function ParentComponent() {
  const [user, setUser] = useState("Opeyemi Bello");

  const mouseOver = () => {
    setUser("Bello Opeyemi");
  };

  return (
    <UserContext.Provider value={{ user, mouseOver }}>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <div>
      <Component2 />
    </div>
  );
}
function Component2() {
  return (
    <div>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <Component5 />
    </div>
  );
}

function Component5() {
  const { user, mouseOver } = useContext(UserContext);
  const handleMouseOver = () => {
    mouseOver();
  };

  return (
    <div>
      <div>
        Hello <button onMouseOver={handleMouseOver}>{`${user}`}</button>
      </div>
    </div>
  );
}
