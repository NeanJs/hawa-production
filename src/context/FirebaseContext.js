import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase.config";
const FirebaseContext = createContext();

export default function FirebaseProvider({ children }) {
  const [data, setData] = useState([]);
  const fetchAllCollections = async () => {
    try {
      const collections = [
        await getDocs(collection(firestore, "gallery")),
        await getDocs(collection(firestore, "about")),
        await getDocs(collection(firestore, "testimonials")),
        await getDocs(collection(firestore, "team")),
      ];

      const [
        gallerySnapshots,
        aboutSnapShots,
        testimonialSnapshots,
        teamSnapShots,
      ] = await Promise.all(collections);
      const gallery = gallerySnapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const testimonials = testimonialSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const about = aboutSnapShots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const team = teamSnapShots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData({ gallery, testimonials, about, team });
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  useEffect(() => {
    fetchAllCollections();
  }, []);
  return (
    <FirebaseContext.Provider value={data}>{children}</FirebaseContext.Provider>
  );
}

export const useFirebaseData = () => {
  return useContext(FirebaseContext);
};
