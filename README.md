# Salary Calculator API

The Salary Calculator API is a Node.js application that calculates the gross salary based on a desired net salary and allowances, considering various tax and pension rules specific to Ghana. It provides an endpoint to receive input in terms of desired net salary and allowances, and returns the corresponding gross salary along with additional details such as basic salary, total PAYE tax, employee pension contribution amount, and employer pension amount.

## Installation

To run the Salary Calculator API locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd salary-calculator

## Install Dependencies

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

To install the required dependencies for this project, run the following command:

```bash
npm install

## API Usage

### Endpoint

- **POST /calculate-gross-salary**

  Calculates the gross salary based on the provided desired net salary and allowances.

### Request Body

```json
{
  "desiredNetSalary": 3000,
  "allowances": 500
}

### Request Body

- `desiredNetSalary` (number, required): The net salary that the employee desires to receive.
- `allowances` (number, required): Additional allowances added to the basic salary for taxation purposes.

### Response

The API responds with a JSON object containing the calculated gross salary and related details:

```json
{
  "grossSalary": 5000,
  "basicSalary": 4500,
  "totalPayeTax": 700,
  "employeePension": 275,
  "employerPension": 650
}

### Example

#### Using `curl`:

```bash
curl -X POST http://localhost:3000/calculate-gross-salary \
  -H "Content-Type: application/json" \
  -d '{"desiredNetSalary":3000,"allowances":500}'

## Using Postman:

1. Open Postman and create a new **POST** request.
2. Set the URL to `http://localhost:3000/calculate-gross-salary`.
3. In the **Body** tab, select **raw** and **JSON** format.
4. Enter the following JSON payload:

```json
{
  "desiredNetSalary": 3000,
  "allowances": 500
}
Click Send to send the request and view the response.

## Testing

Unit tests are included in the project to ensure the correctness of the salary calculation logic. To run the tests, use the following command:

```bash
npm test

## Dependencies

- **express**: Web framework for Node.js
- **body-parser**: Middleware for parsing JSON request bodies
- **jest**: Testing framework for JavaScript and Node.js applications

## License

This project is licensed under the MIT License - see the LICENSE file for details.



