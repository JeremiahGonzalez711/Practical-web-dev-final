import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const docRef = doc(db, "counter", "clicks");

  // Fetch count on load
  useEffect(() => {
    const fetchCount = async () => {
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setCount(snapshot.data().value);
      } else {
        await setDoc(docRef, { value: 0 });
        setCount(0);
      }
    };
    fetchCount();
  }, []);

  // Increment count and update Firestore
  const handleIncrement = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await setDoc(docRef, { value: newCount }, { merge: true }); // ← this prevents overwriting structure
  };

  // Reset count
  const handleReset = async () => {
    setCount(0);
    await setDoc(docRef, { value: 0 });
  };

  return (
    <div className="app">
      <h1>Thank You Professor</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleIncrement}>Thank you!</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
