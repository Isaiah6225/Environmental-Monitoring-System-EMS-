## Overview

The Environmental Monitoring Station (EMS) is a project designed to collect, process, and visualize environmental data from various sensors. The data collected includes temperature, humidity, light, pressure, and sound levels. This project leverages an Arduino Mega 2560 to interface with the sensors and a Raspberry Pi 5 to process and send data to Firebase Firestore. The data is then queried and displayed in real-time on a frontend web application built with Next.js.

The goal of the project is to provide a live dashboard for environmental monitoring that can be easily extended to support additional sensors and edge devices.

## Hardware Setup

### Arduino Mega 2560
The Arduino Mega 2560 is used to interface with various environmental sensors:
- **Temperature Sensor** (e.g., DHT22)
- **Humidity Sensor** (e.g., DHT22)
- **Light Sensor** (e.g., LDR)
- **Pressure Sensor** (e.g., BMP180)
- **Sound Sensor** (e.g., Microphone module)

The sensors are connected to the Arduino's analog and digital pins. The Arduino continuously reads data from the sensors and sends it over a serial communication line to the Raspberry Pi 5.

### Raspberry Pi 5
The Raspberry Pi 5 acts as the intermediary between the Arduino and the Firestore database. It:
- Receives data from the Arduino over the serial communication line.
- Processes and formats the data.
- Sends the data to Firebase Firestore for storage.

### Connections:
- **Arduino to Raspberry Pi**: The Arduino is connected to the Raspberry Pi via a USB cable for serial communication.
- **Raspberry Pi to Firestore**: The Raspberry Pi uses a Python container to handle the data processing and communication with Firebase Firestore.

## API

### Frontend
The frontend is built with **Next.js**, a JavaScript framework that allows us to build both static and dynamic web applications. The frontend is deployed on **Vercel** and is managed under the main branch of the GitHub repository.

The frontend retrieves data from Firebase Firestore using the Firebase SDK. It displays the environmental data in real-time through visualizations and charts.

The frontend code can be found in the **`EMS-Frontend`** directory.

### Backend
There is no traditional backend server in this project. Instead, the system uses **Firebase Firestore** to store the environmental data. Data is received by the Raspberry Pi from the Arduino, processed, and sent to Firestore.

The data is stored in Firestore in real-time and can be queried by the frontend for visualization. Firebase handles authentication and database management.

### Edge Devices
This project uses two edge devices:
1. **Arduino Mega 2560**: Collects environmental data from various sensors and sends it to the Raspberry Pi.
2. **Raspberry Pi 5**: Acts as the middle layer between the Arduino and Firestore, receiving sensor data from the Arduino via serial communication, processing it, and then storing it in Firestore. A Python container runs on the Raspberry Pi to manage this process.

## Setup and Configuration

### Prerequisites
Before setting up the project, make sure you have the following:
- **Arduino IDE** for flashing the code onto the Arduino.
- **Node.js** installed to run the frontend application.
- **Firebase account** with a Firestore database set up.
- **Python 3** installed on the Raspberry Pi for running the data processing container.

### Arduino Setup
1. **Connect the sensors** to the Arduino Mega 2560.
   - Temperature & Humidity Sensor (DHT22) to an analog pin.
   - Light Sensor (LDR) to an analog pin.
   - Pressure Sensor (BMP180) to I2C pins.
   - Sound Sensor to a digital pin.
2. **Flash the code** onto the Arduino using the Arduino IDE.

### Raspberry Pi Setup
1. **Install dependencies**:
   - Ensure that Python 3 is installed on the Raspberry Pi.
   - Install necessary Python packages like `pyserial` for serial communication and `firebase-admin` for interacting with Firebase.

2. **Run the Python container**:
   - The Python container listens for incoming serial data from the Arduino and sends it to Firebase Firestore.
   - Set up a `.env` file with Firebase credentials and configure the Firebase Admin SDK.

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/EMS.git
   cd EMS
   cd EMS-Frontend


### 5. **Testing**
This section outlines how to test the different components of the system.

## Testing

### Testing Arduino
1. **Test the sensors** by flashing the code onto the Arduino and ensuring the sensors are reading data.
2. **Check the serial output** on the Arduino IDE's serial monitor to ensure the data is being transmitted correctly.

### Testing Raspberry Pi
1. **Ensure the serial communication** between the Raspberry Pi and the Arduino is working. You can check this by running the Python container on the Raspberry Pi and verifying that data is received from the Arduino.
2. **Verify data in Firestore**: After the Python container is running, check the Firestore database to ensure data is being stored correctly.

### Testing Frontend
1. Run the frontend locally using `npm run dev`.
2. **Verify data display** by checking if the environmental data is displayed in real-time on the frontend.
3. If the data isn’t showing up, ensure that Firebase credentials are correctly configured and that the Firestore rules allow reading and writing data.

## Contributing

We welcome contributions to the EMS project! To contribute, please fork the repository and create a pull request with your changes. Make sure to follow the coding style and write tests for new features.

### Reporting Issues
If you encounter any issues, please report them via the [GitHub Issues](https://github.com/your-repository/EMS/issues) page. Provide as much detail as possible, including steps to reproduce and any error messages.



## Credits

- **Next.js** – A React framework for building user interfaces.
- **Firebase** – Cloud platform for database and authentication services.
- **Arduino** – Open-source electronics platform used for sensor data collection.
- **Raspberry Pi** – Single-board computer used for processing and communication.

