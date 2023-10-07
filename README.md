# yt-player



### Prerequisites

Before you start, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)



### Installation

1. Clone this repository to your local machine:

  ```
  git clone https://github.com/nexuslifeline/yt-player.git
  ```

2. Navigate to the project folder and Install project dependencies:

  ```
  npm install
  # or
  yarn install
  ```

### Configuration

To make use of YouTube data in your app, you'll need a YouTube API Key. Follow these steps to set it up:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project if you don't already have one.
3. In the left sidebar, navigate to "APIs & Services" > "Credentials."
4. Click on "Create Credentials" and select "API Key."
5. Copy the generated API Key.
6. Click on "Enable APIs and Services."
7. In the search bar, type "YouTube Data API v3" and select it.
8. Click the "Enable" button for the "YouTube Data API v3."
9. In your project folder, create a .env file in the root directory.
10. Add your YouTube API Key to the .env file as follows:
  ```
  REACT_APP_YT_API_KEY=your-youtube-api-key-here
  ```
  Replace **your-youtube-api-key-here** with your actual YouTube API Key.


11. Save the .env file.

### Development Mode

1. To start the development server with hot-reloading, run:

  ```
  npm run start
  # or
  yarn start
  ```

### Production Build

1. To build the app for production, run:

  ```
  npm run build
  # or
  yarn build
  ```