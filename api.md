1. Plans
Get All Plans
Endpoint: GET /api/plans
Description: Retrieves a list of all available plans.
Response:
200 OK: Returns an array of plan objects.
500 Internal Server Error: If there is an issue with the server or database.

Add a New Plan
Endpoint: POST /api/plans
Description: Adds a new plan to the database.
Request Body: JSON object containing the plan details.
Response:
201 Created: Returns the created plan object.
500 Internal Server Error: If there is an issue with the server or database.

2. Subscriptions
Get All Subscriptions
Endpoint: GET /api/subscriptions
Description: Retrieves a list of all subscriptions.
Response:
200 OK: Returns an array of subscription objects.
500 Internal Server Error: If there is an issue with the server or database.

Add Subscriptions
Endpoint: POST /api/subscriptions
Description: Adds subscriptions from a JSON file to the database.
Request Body: No request body is needed since the data is read from a JSON file.
Response:
201 Created: Returns a success message indicating the subscriptions were added successfully.
500 Internal Server Error: If there is an issue with the server, database, or reading the JSON file.