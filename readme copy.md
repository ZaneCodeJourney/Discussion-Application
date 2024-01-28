# TheWildOasis

## Project Description

This Wild Oasis Cabin Reservation Application, built with React and Supabase, is the internal application used inside the hotel to manage each booking. The information is fetched from an API provided by Supabase.

### UI Overview

Here's a glimpse of the Application, highlighting its features and page layout

![Main View](public/readmeImages/DashBoard.png)
_Dashboard of the application_

## Technical Stack

This application utilizes several modern web technologies, including:

- **React (with Hooks)**: Used for building the user interface and handling component state and side effects.
- **React Router**: A library dynamic routing, nested routes, and navigation
- **Styled Components**: Utilized for writing CSS in JavaScript, allowing for more dynamic and reusable components.
- **React Query**: The best way of managing remote state, with features like caching, automatic re-fetching, pre-fetching, offline support, etc.
- **Context Api**: There is few UI state needed in this app, so one simple context with useState will be enough.
- **React Hook Form**: Used for handling big forms, such as manual state creation and error handling.
- **Other tools**: React icons / React hot toast / Recharts / date-fns / Supabase.

## Upcoming Features

- **Editing Booking**: Users can change additional guests and add arriving, check-in and check-out times.
- **Dynamic Price**: Users will have the ability to make the price dynamic, instead of a fixed price throughout the entire year.
- **Registering Restaurant Bills**: Adding a restaurant to this hotel in the sidebar by taking the user to a page where they can register a bill value
- **PDF invoice**: When we click on Checkout, leading to a page where we could generate a PDF invoice that we could then mail to the user.

## Installation and Running

Follow the steps below to set up and run this project on your local environment:

### Install Dependencies

Using npm or yarn, install the project's dependencies:

```bash
npm install
# or
yarn
```

### Run the Project

Once the dependencies are installed, you can run the project using Vite:

```bash
npm run dev
# or
yarn dev
```

The application will start and by default can be accessed at http://localhost:5173/.

## How to Contribute

Contributions to this project are always welcome. Here's how you can help enhance its features or make improvements:

### Fork the Repository

Start by forking the project repository, then clone your fork using:

```bash
git clone https://github.com/Zane-007/The-Wild-Oasis.git
```

### Create a New Branch

It's recommended to create a new branch for each feature or fix:

```bash
git checkout -b name-of-your-new-branch
```

### Make Your Changes

Implement your desired modifications or additions to the code.

### Commit Your Changes

Once done, save your changes:

```bash
git commit -m "Provide a brief description of your changes here"
```

### Push to Your Branch

Push your updates to your branch:

```bash
git push origin name-of-your-new-branch
```

### Open a Pull Request

Navigate to the original project repository on GitHub and submit a pull request. Ensure you give a detailed explanation of the changes you've made.

Your contribution will be reviewed, and if it meets the project's standards and objectives, it'll be merged. Thanks in advance for your effort and input!

## Contact Me

If you have questions or wish to discuss the project further, don't hesitate to reach out:

- **Email:** [wenziyang007@gmail.com](mailto:wenziyang007@gmail.com)

I'm always open to feedback, collaboration, or general inquiries. Looking forward to hearing from you!
