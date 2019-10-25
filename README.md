# Strive
- Strive is an online goal setting management system inspired by OKR's.
- The aim is to help companies and indivisuals achieve their goals by setting objectives, key results, and by providing visual progress trackers.


### Previews
#### User Login and User Homepage
![](login-userhome.gif)
- Application stores specific user data for eacj user
- On valid log in application renders a stack of quotes, shuffled on refresh
- Allows users to create objectives and key results that will be stored correctly and persisted in the database
- Stores 3 objectives on main objective page, all other objectives are stored at "Show All Objectives"

#### Key Results and Task Addition
![](keyresults-addTask.gif)
- Stores each user's key results in a modern list format corresponding to it's objective (3 Minimum)
- Allows for users to add tasks to each key result and stores  persistent data corresponding to it's key result
- Effeciently searches through the user's objectives and returns the correct match



#### Objective Progress and Logout
![](progress.gif)
- Upon completion of a key result, the user will be redirected to the progress page, where each completed key result will add the correct percentage to the overall objective progress
- Persist and stores data in a visual progress tracker tailored to each objective and user 
- Effectively stores data after log out and rerenders data on login


### Technologies Used 
- Front-End
    - Webpack and Babel Configuration Files
    - Front-End Developed with React 
    - React Router for front-end routing
    - Styled Components
    - Inline CSS
    - HTTP request made to server using axios

- Back-End
    - Express Server
    - MySQL Database 
        - Sequelize 
        - Raw SQL

