
# Mobiliation: Journey Packing Assistant.

**Mobiliation** is a React-based web application designed to assist users in organizing and managing the items they need to pack before embarking on a journey. It helps users track what they've packed, sort items by various criteria, and visualize their packing progress with a packing percentage feature.

## Table of Contents
- [Mobiliation: Journey Packing Assistant.](#mobiliation-journey-packing-assistant)
  - [Table of Contents](#table-of-contents)
  - [Features.](#features)
    - [User Features:](#user-features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Add Items:](#add-items)
    - [Mark as Packed:](#mark-as-packed)
    - [Sort Items:](#sort-items)
    - [Track Progress:](#track-progress)
    - [Key Components](#key-components)
  - [Folder Structure](#folder-structure)
  - [License](#license)

## Features.

### User Features:

- **Item Listing**:  
-  Users can list the items they need for their journey, such as shirts, shoes, toiletries, etc.
-   **Item Quantity**:  
  For each item, users can specify the quantity needed (e.g., 5 shirts).
  - **Packing Status**:  
  Once an item is packed, it can be marked as packed (crossed out),helping users keep track of what’s left.
  - **Sorting**:  
  - Sort items based on the input order (the order in which the user adds items).
  - Sort items by packing status (packed vs. unpacked).
  - **Packing Progress**:  
  Visualize your packing progress through a statistics feature that shows the percentage of items packed.

  ## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **LocalStorage** (optional): To persist the list of items and their packing status across browser sessions.

## Installation

### Prerequisites
- **Node.js** (version >= 22)
- **npm** (version >= 6)

### Steps

1. Clone the repository:
2.```bash
    git clone https://github.com/yourusername/mobiliation.git
    cd mobiliation
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm run dev
    ```

## Usage

### Add Items:
- Input items and specify how many of each item you need (e.g., 3 shirts).

### Mark as Packed:
- As you pack each item, click on the item to cross it out (mark it as packed).

### Sort Items:
- You can sort the list based on the order you entered them, or by packing status (showing packed or unpacked items first).

### Track Progress:
- View the percentage of packed items, allowing you to track how much is left to pack.

### Key Components

- **Item List**:  
  Display all items with their packing status (packed/unpacked).

- **Add Item**:  
  A form to add new items to the list.

- **Packing Status Toggle**:  
  Allows users to mark items as packed or unpacked.

- **Sort Options**:  
  A dropdown or buttons to change the sorting order of the items.

- **Packing Statistics**:  
  Shows the percentage of packed items.

  ## Folder Structure

  ```bash
├── public/                 # Public assets (HTML, favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components (e.g., ItemList, AddItemForm)
│   ├── styles/             # Tailwind CSS 
│   ├── App.js              # Main application component
│   └── index.js            # Entry point for the React app
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── .env                    # Environment variables (if applicable)
└── README.md               # Project documentation (you're reading it now!)

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
