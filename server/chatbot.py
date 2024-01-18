import nltk
from nltk.stem import WordNetLemmatizer
import numpy as np
import tensorflow
from tensorflow import keras
from keras.models import Sequential , load_model
from keras.layers import Dense
import random
import json
import pickle

# Initialize the Lancaster Stemmer
lematizer = WordNetLemmatizer()

# Load the intents data from a JSON file
with open("intent.json") as file:
    data = json.load(file)

# Define a function to develop the neural network model
def develop_model(input_size,output_size):
    model = Sequential([
        Dense(8, input_shape=(input_size,), activation='relu'),
        Dense(8, activation='relu'),
        Dense(8, activation='relu'),
        Dense((output_size), activation='softmax')
    ])

    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    return model
