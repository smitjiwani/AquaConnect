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

# Define a function to convert a user query into a bag of words
def bag_of_words(query, words):
    bag = [0 for _ in range(len(words))]

    s_words = nltk.word_tokenize(query)
    s_words = [lematizer.lemmatize(word.lower()) for word in s_words if word != '?']

    for i in s_words:
        if i in words:
            bag[words.index(i)] = 1

    return bag  

# Define the chat function
def chat():
    print("Start talking with the bot (type quit to stop)!")
    while True:
        inp = input("You: ")
        if inp.lower() == "quit":
            break
        if use_pre_trained_model and pre_trained_model:
            results = pre_trained_model.predict([bag_of_words(inp, words)])[0]
        else:    
            results = model.predict([bag_of_words(inp, words)])[0]

        results_index = np.argmax(results)
        tag = labels[results_index]
        
        if results[results_index] > 0.7:
            for tg in data["intents"]:
                if tg['tag'] == tag:
                    responses = tg['responses']
                    print(random.choice(responses))
        else:
            print("I apologise but I can't quite get you, could you please repeat your query")  