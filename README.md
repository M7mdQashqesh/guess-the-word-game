# Guess The Word Game

A fun and interactive word-guessing game where players have limited attempts to guess a randomly selected word. Similar to popular word games like Wordle, but with its own unique twist!

## 🎮 Game Overview

In this game, you have **5 tries** to guess a 6-letter word. Each guess provides feedback through color-coded hints:

- **🟩 Green** - The letter is correct and in the right position
- **🟨 Yellow** - The letter is correct but in the wrong position  
- **🟩 Gray** - The letter is not in the word

You also get **2 hints** to help you along the way!

## 🚀 Features

- Interactive input system with keyboard navigation
- Real-time feedback with color-coded letters
- Hint system to help players
- Automatic keyboard focus management
- Responsive and clean user interface
- 20 different words in the word bank for variety

## 🎯 How to Play

1. **Start the game** - Open `index.html` in your browser
2. **Make your guess** - Type one letter at a time in each input field (6 letters total)
3. **Submit your guess** - Click the "Check Word" button
4. **Read the feedback** - Look at the color-coded results:
   - Green means the letter is correct and in the right spot
   - Yellow means the letter is in the word but wrong position
   - Gray means the letter isn't in the word
5. **Use hints wisely** - You have 2 hints to help you figure out the word
6. **Win or lose** - Guess the word within 5 tries to win!

## 📁 Project Structure

```
guess-the-word-game/
├── index.html      # Main HTML structure
├── main.js         # Game logic and functionality
├── style.css       # Game styling and layout
└── README.md       # Documentation (this file)
```

## 🛠️ Technical Details

- **HTML5** - Semantic markup for the game structure
- **CSS3** - Modern styling with flexbox layout
- **Vanilla JavaScript** - Pure JS implementation without external libraries
- **No dependencies** - Runs entirely in the browser

## 📋 Game Settings

The game is configured with the following parameters (easily customizable in `main.js`):

- **Number of inputs per try:** 6 letters
- **Number of tries:** 5 attempts
- **Number of hints:** 2 available
- **Word bank:** 20 different 6-letter words

## 🎮 Keyboard Controls

- **Type letters** - Use your keyboard to enter letters
- **Arrow Right/Left** - Navigate between input fields
- **Auto-focus** - The next input field is automatically focused after each letter

## 🎨 Color Scheme

- **Primary Color:** Red (#f44336)
- **Correct & In Place:** Green (#18ba89)
- **Correct but Wrong Position:** Orange (#f89e13)
- **Wrong Letter:** Dark Gray (#27303f)
- **Background:** Light Gray (#eee)

## 👤 Author

Created by **Mohammed Qashqesh**

## 📝 License

This project is open source and available for personal use and learning purposes.

---

Enjoy the game and have fun guessing! 🎉
