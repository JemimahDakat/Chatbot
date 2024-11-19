# UniChat - Event Discovery and Recommendation App

UniChat is a React.js application with a Flask backend designed to help users find and explore events in their area. By leveraging GPT-4, the app provides personalized event suggestions based on user preferences. Currently, the database uses dummy data as it's not yet fully set up.

## Demo Video

[Watch the Demo](https://drive.google.com/file/d/1phZje-oKd3xT4Jcrp2TOIodcbmSIidRx/view?usp=sharing)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Event Search**: Users can search for events in their area.
- **GPT-4 Integration**: Utilizes GPT-4 to fetch and suggest the most suitable events based on user input.
- **Interactive UI**: Built with React.js for a dynamic and responsive user experience.
- **Backend API**: Flask server handles API requests and integrates with GPT-4.
- **Dummy Data**: Uses placeholder data for demonstration purposes until the database is fully implemented.

## Technologies Used

- **Frontend**:
  - React.js
  - HTML5
  - CSS3
  - JavaScript

- **Backend**:
  - Python Flask
  - GPT-4 API (OpenAI)

- **Version Control**:
  - Git
  - GitHub

- **Other Tools**:
  - Node.js and npm
  - Axios for API requests
  - Flask-CORS for handling CORS policies

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Python 3.x** installed.
- An **OpenAI API key** for GPT-4 integration.

### Installation

#### Clone the Repository

```bash
git clone https://github.com/marwanosman505/ibmHackathon.git
cd ibmHackathon
```

#### Set Up the Backend

1. Navigate to the backend directory:
```bash
cd backend
```
2. Install the required Python packages:
```bash
pip install -r requirements.txt
```
3. Navigate to the backend directory:
- Create a .env file in the backend directory.
- Add your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```
4. Run the Flask server:
```bash
flask run
```
#### Set Up the Frontend

1. Open a new terminal and navigate to the frontend directory:
```bash
cd ../frontend
```
2. Install the required npm packages:
```bash
npm install
```
3. Start the React app:
```bash
npm start
```

## Usage
- Open your web browser and navigate to http://localhost:3000.
- Use the search bar to input your preferences or location.
- The app will communicate with the Flask backend and GPT-4 to fetch and display event suggestions.
- Explore the suggested events and find the ones that suit you best.

## Future Improvements
- **Database Integration:** Implement a real database to store and retrieve event data.
- **User Authentication:** Allow users to create accounts and save their preferences.
- **Advanced Filtering:** Enable more detailed search filters (date, category, price).
- **Map Integration:** Display events on a map for better geographic visualization.
- **UI/UX Enhancements:** Improve the interface for a more engaging user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Developer**: Marwan Osman  
**Email**: [marwanosman505@gmail.com](mailto:marwanosman505@gmail.com)  
**GitHub**: [marwanosman505](https://github.com/marwanosman505)  
**LinkedIn**: [Marwan Osman](https://www.linkedin.com/in/marwan-osman-5b9b88209/)

