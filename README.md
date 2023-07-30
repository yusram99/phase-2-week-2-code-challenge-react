# Bot Battlr - React Web App
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our React web app:


# Introduction
Bot Battlr is a fun and interactive React web app that allows users to build their own Bot Army. The app fetches data from a local JSON server and displays a list of available bots. Users can view bot details, add bots to their army, and remove them from the army.

# Getting Started
To run the app locally on your machine, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies by running npm install.
- Start the JSON server by running json-server --watch db.json --port 8001.
- Start the React app by running npm start.
- Open your browser and visit http://localhost:3000 to see the app in action.
# Features
- Bot Collection: Browse through the list of available bots in the BotCollection component. Each bot card displays essential information about the bot, including name, damage, health, armor, class, catchphrase, created date, and updated date.

- Your Bot Army: In the BotArmy component, you can view the bots you have enlisted in your army. Clicking on a bot card in the BotCollection will add it to your army.

- Removing Bots: You can remove a bot from your army by clicking on its card in the YourBotArmy component. The bot will be discharged from your service forever.

# Code Structure
- The main entry point of the app is the App.js file, which imports and renders various components.

- The NavBar component, located in src/components/Navbar.js, displays the navigation bar at the top of the app, providing links to different sections.

- The BotCollection component, located in src/components/BotCollection.js, renders the list of available bots. Clicking on a bot card here will add it to the army.

- The BotArmy component, located in src/components/YourBotArmy.js, displays the enlisted bots in your army. Clicking on a bot card here will remove it from your army.

<!-- # Contributing -->
Contributions to the project are welcome! If you find any bugs, have suggestions for improvements, or want to add new features, feel free to create pull requests.

# License
This project is licensed under the MIT License. See the LICENSE file for details.