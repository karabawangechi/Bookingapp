from __future__ import print_function
import africastalking
from flask import Flask, request

app = Flask(__name__)


@app.route("/ussd", methods=["POST"])
def ussd():
    # Read the variables sent via POST from our API
    session_id = request.values.get("sessionId", None)
    serviceCode = request.values.get("serviceCode", None)
    phone_number = request.values.get("phoneNumber", None)
    text = request.values.get("text", "default")

    if text == "":
        # This is the first request. Note how we start the response with CON
        response = (
            "CON Welcome to Insurance hub \n Please enter the service you require \n"
        )
        response += "1. Health Insurance \n"
        response += "2. Motor Insurance \n"
        response += "3. Life Insurance \n"
        response += "4. Travel Insurance \n"
        response += "5. Home Insurance \n"
        response += "6. Business Insurance \n"
        response += "7. Other Insurance \n"

    elif text == "1":
        # Business logic for first level response
        response = "CON Choose your the service you want\n"
        response += "1. Companies \n"
    elif text == "1*1":
        response = "CON The companies that offer health insurance are \n"
        response += "1. AAR \n"
        response += "2. Jubilee \n"
        response += "3. UAP \n"
    elif text == "1*1*1":
        response = "CON  Thank for choosing AAR.\n You can either :\n"
        response += "1. call them \n"
        response += "2. claim cover"
    elif text == "1*1*1*1":
        response = "END Call AAR on 0712345678"

        SMS().send("You can call AAR on 0712345678", [phone_number])
    elif text == "1*1*1*2":
        response = "CON Choose type of claim \n"
        response += "1. Outpatient \n"
        response += "2. Inpatient \n"
        response += "3. Pre and post-hospitazation \n"
    elif text == "1*1*1*2*1":
        response = "CON Enter your Hospital number"
    elif text == "1*1*1*2*1*1234":
        response = "CON Enter your ID number"
    elif text == "1*1*1*2*1*1234*1234":
        response = "END Your claim has been successfully submitted"

    elif text == "2":
        # This is a terminal request. Note how we start the response with END
        response = "CON These are the companies\n"
        response += "1. AIG \n"
        response += "2. CIC \n"
        response += "3. APA \n"
    elif text == "2*1":
        response = "CON Thank you for choosing AIG.\n You can either :\n"
        response += "1. call them \n"
        response += "2. claim cover \n"
        response += "3. Track claim status \n"
        response += "4. Get policy"
    elif text == "2*1*3":
        response = "END You will receive a message with the status of your claim"
        SMS().send("Your claim status is pending", [phone_number])
    elif text == "2*1*4":
        response = "CON Enter your policy number"
    elif text == "2*1*4*1234":
        response = "END You will receive a message with your policy"
        message = "Sample Policy Summary (Not a real document)\nPolicy #: ABC123456\nInsured: John Doe\nType: [Policy Type]\nDates: 2024-01-01 to 2025-01-01\nCoverage: [Briefly describe what's covered] - Up to [limit, if applicable]\nDeductible: [Amount]\nBenefits: [List key benefits]\nExclusions: [List key exclusions]\nClaims: Contact us & submit required documents.\nFull details: Refer to your official policy documents."
        SMS().send(message, [phone_number])
    elif text == "2*1*2":
        response = "CON Enter your claim \n"
        response += "1. Third-party claims \n"
        response += "2. Own damage claims \n"
    elif text == "2*1*1*1":
        response = "CON Enter vehicle number plate\n"
    elif text == "2*1*1*1*1234":
        response = "END Your claim has been successfully submitted"

    elif text == "1*1":
        # This is a second level response where the user selected 1 in the first instance
        accountNumber = "ACC1001"
        # This is a terminal request. Note how we start the response with END
        response = "END Your account number is " + accountNumber

    else:
        response = "END Invalid choice"

    # Send the response back to the API
    return response


# works with both python 2 and 3


class SMS:
    def __init__(self):
        # Set your app credentials
        self.username = ""
        self.api_key = ""

        # Initialize the SDK
        africastalking.initialize(self.username, self.api_key)

        # Get the SMS service
        self.sms = africastalking.SMS

    def send(self, mess, recipients):
        # Set the numbers you want to send to in international format

        # Set your message
        message = mess

        # Set your shortCode or senderId
        try:
            # Thats it, hit send and we'll take care of the rest.
            response = self.sms.send(message, recipients)
            print(response)
        except Exception as e:
            print("Encountered an error while sending: %s" % str(e))


if __name__ == "__main__":
    app.run(debug=True)
