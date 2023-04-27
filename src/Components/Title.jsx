import { useEffect } from "react";
function Title() {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Fetching API...");
    }, 1000);

    return () => {
      console.log("Unmount");
      clearInterval(interval);
    };
  }, []);

  return <h1>Welcome Back</h1>;
}

export default Title;
