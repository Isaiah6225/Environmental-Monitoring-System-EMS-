import serial
import os
import time 
import json
import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1 import SERVER_TIMESTAMP


"""
init firebase app 
"""
cred = credentials.Certificate("./envmonsys-firebase-adminsdk-fbsvc-d2449d7cc0.json")
firebase_admin.initialize_app(cred)

db = firestore.client();



# open serial communication for arduino 
ser = serial.Serial('/dev/ttyACM1',9600,timeout=1)
time.sleep(2)


'''
Save data to firestore
'''
def save_data_firebase(content):
    try:
        doc_ref = db.collection("envData").document()
        doc_ref.set(content)
        return True
    except Exception as e:
        print("Error saving data: ", e)
        return None    
'''
Read data from arduino
'''
def read_data():
    try:
        content = ser.readline().decode('utf-8').strip()
        if content: 
            print(f"Received data from the arudino: {content}")

            try:
                temp, humidity, pressure, light_levels, = map(float, content.split(','))
                return {
                    "temperature": temp,
                    "humidity": humidity,
                    "pressure": pressure,
                    "light_levels": light_levels,
                    "timestamp": SERVER_TIMESTAMP
                }
            except ValueError: 
                print("Content format error content is not in CSV format")
                return None
        return None
    except Exception as e:
        print(f"Serial read error {e}")
        return None
'''
Main loop to run 
'''   
count = 0 
while True:
    
    content = read_data() 
    print("Collecting Sensor data...")
    

    if content: 
        print(f"Collected data: {content}")
    
        if save_data_firebase(content ):
            print("Data saved to firebase")
        else: 
            unsent_filename = f"unsaved_data_{int(time.time())}.json"
            print("Data was not saved to the volume. Trying to save data in current directory...")
            with open(unsent_filename, 'w') as f:
                json.dump(content, f)

    else: 
       print("Skipping data transmission due to sensor error")        
       print("Sleeping for 1 minute...")
       count += 1 
       print(f"Data has been sent {count} time(s)")
       time.sleep(60) 
