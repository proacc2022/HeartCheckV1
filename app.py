import numpy as np
from flask import Flask, request, render_template
import pickle
from flask_cors import CORS
import json

application = Flask(__name__)  # Initialize the flask App
CORS(application)
model = pickle.load(open("model.pkl", "rb"))


@application.route("/")
def home():
    return render_template("index.html")


@application.route("/predict", methods=["POST"])
def predict():
    d = request.json["values"]

    int_features = [int(x) for x in d.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)

    print(output)

    if int(output) == 1:
        return json.dumps(
            {"output": "Yes, There are chances of you suffering a heart attack."}
        )
    elif int(output) == 0:
        return json.dumps({"output": "No, You are doing good."})
    else:
        return json.dumps({"output": "Cannot Determine."})


if __name__ == "__main__":
    application.run(debug=True)
