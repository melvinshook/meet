This is a React app project using create-react-app to build it. The objective of this project is to display events happenening in different cities based off a user's city search. This app should also be serverless and built using TDD techniques. The app should also be able to function offline.

1. Feature- Filter events by City
   User story: As a user, I should be able to search for a specific city and get events happening in that city so that only events happening in that city show.

Scenario: Users will filter events by a specific city Given that the user is searching for one specific city When the user searches for a specific city Then the events for just that city should be dispalyed.

2. Feature- Show/Hide event details
   User story: As a user, I should be able to show the events details that I'm interested in so that the event details that I'm not interested in are hiding and not showing.

Scenario: A user shows details of an event they are interested in Given that the user no longer wants to read about this event When the user taps "hide details" Then the app should hide the details so the user can look at the details of another event.

3. Feature- Specifiy number of events
   User story: As a user, I should be able to see the total number of events in a city for a specific day so that I can pick and choose what events I want to attend.

Scenario: The user decides the number of events to display Given that the user is on the events home screen When the user specifies the nnumber of events they want displayed Then the app should only display that number of events.

4. Feature- Use the app when offline
   User story: As a user, I should be able to access the app when the app is offline so I can still access the events in the city even when connection is poor.

Scenario: The user decides to access the able with no connection Given that the app works properly offline When the user goes to access the information while the app is offline Then the app should still accurately display all the information.

5. Feature- Add an app shortcut to the home screen
   User story: As a user I should be able to create a shortcut for the app to my home screen so that I can access the app easier.

Scenario: User decides to add app shortcut to home screen Given that the app is installed on the phone When the user selects the add shorcut to home screen option Then the app should create a shortcut on the home screen.

6. Feature- Dispay charts visualizing event details
   User story: As a user, I should be able to visually see charts for the events so that I can compare data for the events.

Scenario: A user views a chart showing event details Given that the user is viewing the details of an even When the user selects the "charts" option Then the app will dispay charts showing data.

How this Meet App will use serverless functions:

- The Meet App will use serverless functioins for user authentication, access to the Google calendar API. The API sending back events by city and charts displaying event data to authorized users. By using serverless technology the app is also able to scale to the users demands.
