# Bot Battlr

**Bot Battlr** is a React web application where users can browse a collection of bots, enlist them into their army, and even discharge bots from service! It's a fun little game where you manage your own army of robots, view their stats, and delete them from your army if you no longer need them. Built with React and styled with Tailwind CSS, the app features a sleek dark theme for ultimate space vibes!

## 📸 Preview

<img src="./public/images/Screenshot from 2025-04-23 20-43-18.png" alt="Bot Battlr Screenshot 1" width="700"/>
<br />
<img src="./public/images/Screenshot from 2025-04-23 20-43-33.png" alt="Bot Battlr Screenshot 2" width="700"/>

## Features
- **View Bot Collection**: See all available bots with their avatar, health, damage, armor, and bot class.
- **Add Bots to Your Army**: Enlist bots into your army by clicking on them.
- **Remove Bots from Your Army**: Discharge bots by clicking on them in your army.
- **Delete Bots Permanently**: Discharge a bot permanently, and it will be deleted from both the frontend and the backend.
- **Dark Mode**: Sleek dark theme with a modern look.
  
## Setup & Installation

Follow these steps to run **Bot Battlr** locally:

### Prerequisites

- **Node.js** installed (preferably the latest LTS version).
- **json-server** installed for running the mock API.

### 1. Clone the Repository

First, fork the repo then clone to your local machine:

```bash
git clone https://github.com/yourusername/bot-battlr.git
cd bot-battlr
```

### 2. Install Dependencies
```bash 
npm install
npm install tailwindcss @tailwindcss/vite
```

### 3. Setup the JSON Server
In your project directory/ root directory, create a file called db.json.

Use the example data below and paste it into the db.json file.
```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1"
  }
]
```

### 4. Start the JSON Server
Run this command to start the backend server:
```bash
json-server --watch db.json --port 8001
```

### 5. Run the React App
```bash
npm run dev
```
### 6. View the App
Open **http://localhost:5173** in your browser, and you should see the Bot Battlr app in action!



