import Container from "../components/ui/Container";
import Table from "../components/ui/Table";
import { fetchEnvData } from "../components/server/fetchEnvData";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await fetchEnvData();

  return (
    <Container>
      <div className="bg-gray-100 rounded-lg">
        {/* ANALYTICS SECTION */}
        <section className="min-h-screen p-5 rounded-lg">
          <Table collectedData={data} />

          {/* ABOUT SECTION */}
          <div className="bg-[#FAF9F6] shadow-lg rounded-lg p-6 mt-8 hover:shadow-xl transition flex flex-col items-start space-y-2">
            <h1 className="font-bold text-3xl mb-4">About</h1>
            <p className="text-lg">
              The goal of this project was to use sensors to collect environmental data, where the data can then be processed, analyzed, and displayed in the cloud.
              The current data being collected by the Environmental Monitoring System (EMS) consists of <strong>temperature</strong>, <strong>light levels</strong>, <strong>humidity</strong>, and <strong>pressure</strong>.
            </p>
            <p className="text-lg">
              The data is collected from two main sensors: <strong>BME680</strong> and a <strong>Photoresistor</strong><sup>*</sup>.
              The BME680 collects the majority of the data (temperature, humidity, and pressure), while the photoresistor measures light levels.
            </p>
            <p className="text-lg">
              The data is read by a <strong>microcontroller</strong><sup>**</sup> (Arduino Mega2560) and processed before being sent to a <strong>Raspberry Pi</strong><sup>***</sup>.
              From there, it is saved to a database in the cloud.
            </p>
            <p className="text-lg">
              The frontend application reads the stored data from the database, allowing us to analyze and generate graphs and tables from the collected data.
            </p>

            <hr className="border-gray-300 w-full my-2" />
            <ul className="text-base text-gray-600 space-y-1">
              <li><sup>*</sup> <strong>Photoresistor:</strong> A resistor whose resistance changes based on the intensity of the light shining on it.</li>
              <li><sup>**</sup> <strong>Microcontroller:</strong> A small computer chip used in embedded systems.</li>
              <li><sup>***</sup> <strong>Raspberry Pi:</strong> A small computer used for edge computing.</li>
            </ul>
	{/* Images of the Station */}
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
	  <Image
	    src="/images/station_1.png"
	    width={500}
	    height={500}
	    alt="Environmental monitoring station - side view"
	    className="rounded-xl shadow-md hover:shadow-xl transition"
	  />
	  <Image
	    src="/images/station_2.png"
	    width={500}
	    height={500}
	    alt="Environmental monitoring station - front view"
	    className="rounded-xl shadow-md hover:shadow-xl transition"
	  />
	  <Image
	    src="/images/station_3.png"
	    width={500}
	    height={500}
	    alt="Environmental monitoring station - rear view"
	    className="rounded-xl shadow-md hover:shadow-xl transition"
	  />
	</div>

          </div>

          {/* FUTURE FEATURES */}
          <div className="bg-[#FAF9F6] shadow-lg rounded-lg p-6 mt-8 hover:shadow-xl transition flex flex-col items-start space-y-2">
            <h1 className="text-3xl font-bold mb-4">Future Features</h1>
            <p className="text-lg">
              There are a lot of features that will be added in the near future, and some in the far future.
              A couple of features that will be added in the near future include:
              <strong> capturing decibels</strong> from the surrounding area through sound sensors, and <strong>measuring rainfall</strong>.
            </p>
            <p className="text-lg">
              In the far future, there will be features such as: <strong>measuring wind trajectory and speed</strong>,
              <strong> deploying a network of stations</strong>, and <strong>integrating sensors into autonomous robots</strong> for mobile data collection.
            </p>
            <p className="text-lg">
              Contributions to these features would be much appreciated — you can reach out to the main contributor via the <strong>Contributors</strong> section below.
            </p>
          </div>

          {/* CONTRIBUTORS */}
          <div className="bg-[#FAF9F6] shadow-lg rounded-lg p-6 mt-8 hover:shadow-xl transition flex flex-col items-start space-y-2">
            <h1 className="text-3xl font-bold mb-4">Contributors</h1>
		<Image
		  src="/images/isaiah_image.png"
		  width={500}
		  height={500}
		  alt="Portrait of Isaiah Johnson, project lead"
		  className="rounded-xl shadow-md "
		/>
            <h2 className="text-2xl font-semibold">Isaiah Johnson</h2>
            <p className="text-lg">
              Isaiah Johnson is the main contributor and lead of this project. He has been responsible for the success of this project by completing the following tasks:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1 pl-2">
              <li>Creating, designing, and 3D printing the sensor case</li>
              <li>Soldering connections from sensors to the microcontroller</li>
              <li>Designing the API</li>
              <li>Designing and implementing the website logic</li>
              <li>Setting up Python containers on the Raspberry Pi</li>
              <li>Designing and wiring circuits for future features</li>
              <li>Maintaining the cloud resources used to deploy the API</li>
            </ul>
            <p className="text-lg">
              If you would like to contribute to this project, feel free to reach out and connect with Isaiah through the following links:
            </p>
            <ul className="text-lg space-y-1">
              <li><strong>Email:</strong> <Link href="mailto:your-email@example.com" className="text-blue-600 hover:underline">isaiahjohnson6225@gmail.com</Link></li>
              <li><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/isaiah-johnson-712757248" target="_blank" className="text-blue-600 hover:underline">LinkedIn</Link></li>
              <li><strong>GitHub:</strong> <Link href="https://github.com/Isaiah6225" target="_blank" className="text-blue-600 hover:underline">github.com/Isaiah6225</Link></li>
            </ul>
            <p className="text-lg">
              Any contributions are greatly appreciated, as it takes a significant amount of time and effort to plan, design, and deploy all the moving parts in this project.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}

