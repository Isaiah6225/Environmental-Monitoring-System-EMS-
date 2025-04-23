"use client";

import { EnvData } from "../../types/index.ts"

type Props = {
	collectedData: EnvData[];
};

export default function Table({ collectedData }: Props){

	return(
		<div className="bg-[#FAF9F6] shadow-lg rounded-lg p-6 hover:shadow-xl transition space-y-3">
		  	<table className="text-lg w-full table-auto">
			  <thead >
			    <tr>
			      <th>Temperature</th>
			      <th>Humidity</th>
			      <th>Pressure</th>
			      <th>Light Levels</th>
			      <th>Date Recorded</th>
			    </tr>
			  </thead>
			  <tbody>
			  {collectedData.map((item) => (
			    <tr key={item.id}>
			      <td>{item.temperature}</td>
			      <td>{item.humidity}</td>
			      <td>{item.pressure}</td>
			      <td>{item.light_levels}</td>
			      <td>{new Date(item.timestamp).toLocaleString()}</td>

			    </tr>
			    ))}
			  </tbody>
			</table>
		</div>
	);
}
