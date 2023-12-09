# Course Registration

This project is a simple course registration website where you can buy your preffered courses and check out the credits, prices and so on.

# Features

- Display total credits in the sidebar.
- Course Name adds to the sidebar upon clicking the "Select" button on every card.
- Validates if a course is already added to the sidebar.
- Displays total price and remaining credits
- Displays total credits added

# Technologies used

- React (state management, hooks)

# State Management in this Project

I will discuss here how state is managed in this project. In this project, state is primarily managed using React hooks, specifically the `useState` hook. State is used to keep track of selected courses, remaining credits, total credits, and total prices.

## State Variables

### `course`

The `course` state variable is an array that stores the course data fetched from the "Data.json" file using the `useState` hook. It holds the information about available courses.

### `selectedCourses`

The `selectedCourses` state variable is an array that stores the courses selected by the user. It is also managed using the `useState` hook. Courses are added to this array when the user clicks the "Select" button on a course card.

### `remainingCredit`

`remainingCredit` is a state variable that keeps track of the remaining credit hours available to the user. It is initialized to 20 credits and is updated whenever a course is added to the `selectedCourses` array.

### `totalCredit`

`totalCredit` is another state variable used to store the total credit hours of the courses selected by the user. It is updated whenever a course is added to or removed from the `selectedCourses` array.

### `totalprice`

`totalprice` is a state variable that stores the total price of the courses selected by the user. Like `totalCredit`, it is also updated whenever a course is added to or removed from the `selectedCourses` array.

## State Management Functions

### `handleAddToCart(course)`

The `handleAddToCart` function is responsible for adding a course to the `selectedCourses` array. It first checks if the course is already in the cart. If it is, a warning toast is displayed. If not, it calculates the total credit hours and price of the selected courses and updates the `remainingCredit`, `totalCredit`, and `totalprice` state variables accordingly. Finally, it adds the course to the `selectedCourses` array.
