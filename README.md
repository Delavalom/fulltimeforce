# README

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able this project.

- Node.js (Version: >=18.x)
- Pnpm

## Installation

### Setup

1. Clone the GitHub repository.

    ```
    git clone https://github.com/Delavalom/fulltimeforce.git
    ```

2. Install packages with pnpm

    ```
    pnpm i
    ```

3. Set up your **`.env`** file in both the two apps: frontend and server.

### Server

- Duplicate **`.env.example`** to **`.env`**.
- Sign up for a free GitHub account, create a GitHub personal access token, and store it in the **`.env`** file under **`API_KEY`**.
- Optionally, you can specify a port number under **`PORT`** in the **`.env`** file.

### Frontend

- Duplicate **`.env.example`** to **`.env`**.
- Create a GitHub repository and store the URL in the **`.env`** file under **`VITE_REPO_URL`**.
- Start your server and copy the URL, which could be localhost if you are local, and store it in the **`.env`** file under **`VITE_PUBLIC_NESTJS_SERVER`**.

### Quick start with `pnpm dev`

This application uses pnpm workspace, and the scripts are set up to run both applications simultaneously. Also, when you want to deploy them, they have their own individual scripts in the root **`package.json`**.

## **Example Application**

Explore the example application: [Application Example](https://web-fulltimeforce.up.railway.app/)

## **Deployment**

You can easily deploy your own to Railway following this guide:

### Server

1. First, go to **[Railway](https://railway.app/)** and start a new project:

![Screen Shot 2023-09-14 at 4.13.09 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.13.09_PM.png)

1. Now select the repo where you store this code:

![Screen Shot 2023-09-14 at 4.13.21 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.13.21_PM.png)

1. Add the environment variables mentioned above:

![Screen Shot 2023-09-14 at 4.13.36 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.13.36_PM.png)

1. Update the Service Name, watch path, build command, and start command to avoid confusion:

![Screen Shot 2023-09-14 at 4.14.26 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.14.26_PM.png)

![Screen Shot 2023-09-14 at 4.20.15 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.20.15_PM.png)

![Screen Shot 2023-09-14 at 4.14.34 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.14.34_PM.png)

![Screen Shot 2023-09-14 at 4.14.39 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.14.39_PM.png)

### Frontend

1. Now, repeat the same process for the frontend by adding a new service.

![Screen Shot 2023-09-14 at 4.14.57 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.14.57_PM.png)

![Screen Shot 2023-09-14 at 4.20.29 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.20.29_PM.png)

![Screen Shot 2023-09-14 at 4.12.33 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.12.33_PM.png)

![Screen Shot 2023-09-14 at 4.12.38 PM.png](README%2043075ac6d80c4c10a9c097d83ef215b0/Screen_Shot_2023-09-14_at_4.12.38_PM.png)

## **Contributing**

Here's how you can contribute:

- Open an issue if you find a bug.
- Make a pull request for new features, improvements, or bug fixes.

## **License**

This project is licensed under the MIT license.
