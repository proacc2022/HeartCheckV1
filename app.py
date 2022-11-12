import numpy as np
from flask import Flask, request, render_template
import pickle

application = Flask(__name__) #Initialize the flask App
model = pickle.load(open('model.pkl', 'rb'))

@application.route('/')
def home():
    return render_template('index.html')

@application.route('/predict',methods=['POST'])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)
    print(output)
    if int(output) == 1:
        return render_template('index.html', prediction_text='Yes, There are chances of you suffering a heart attack.')
    elif int(output) == 0:
        return render_template('index.html', prediction_text='No, You are doing good.')
    else:
        return render_template('index.html', prediction_text='Cannot Determine.')

if __name__ == "__main__":
    application.run(debug=True)