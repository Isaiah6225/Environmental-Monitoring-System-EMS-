import { EnvData } from "@/types";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function fetchEnvData(): Promise<EnvData[]> {
  const q = query(collection(db, "envData"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  const fetchedEnvData: EnvData[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      temperature: data.temperature,
      humidity: data.humidity,
      pressure: data.pressure,
      light_level: data.light_levels,
      timestamp: data.timestamp.toDate().toISOString(), 
    };
  });

  return fetchedEnvData;
}

