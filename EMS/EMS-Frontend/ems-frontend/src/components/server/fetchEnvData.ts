import { EnvData } from "@/types";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function fetchEnvData(): Promise<EnvData[]> {
  const q = query(collection(db, "envData"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  const fetchedEnvData: EnvData[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<EnvData, 'id'>),
  }));

  return fetchedEnvData;
}

