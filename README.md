# Connectify: Social Media App

Introducing the first version of my new social media app, built using the MERN stack! This app is designed to bring people together and make it easy to connect and share with friends and family.

With Connectify, you can create an account, share posts and photos, comment on other people's content. You can also see events happening around your area, stay up-to-date on the latest news and participate in discussions.

I've built this app using the latest technologies and best practices, so you can trust that it's fast, reliable, and secure. And with a user-friendly interface and intuitive navigation, it's easy to use for people of all ages and backgrounds.

So whether you're looking to catch up with old friends, share your latest adventure, or discover new interests and communities, my social media app has everything you need. Try it today and see for yourself!

## Tech Stack

**Client:** React, Redux, CSS, API (Axios), React-dom, React-router-dom.

**Server:** Node, Express, Mongoose, MongoDB, JWT, dotenv, Bcrypt, Cors, Morgan, serve-favicon.

## Sketches / ERD

![Sketch](/public/login.jpg)
![Sketch](/public/News.jpg)
![diagram](/public/Diagram.drawio.png)


## API Reference

#### Get all posts

```http
  GET /api/posts
  Express Server
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CRUD`    | `string` | **Required**. Login/SignUp        |


#### Get News
https://newsapi.org

```http
  GET /news
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`   | `string` | **Required**. Your API key |

#### Get Events
https://eventsapi.org

```http
  GET /events
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`   | `string` | **Required**. Your API key |


## Environment Variables

To run this project locally, you will need to add the following environment variables to your .env file

`API_KEY` for the News API   
`ANOTHER_API_KEY` for the Events API    
`DATABASE_URL` to connect your database    
`JWT_SECRET` for the jsonwebtoken    

## 🔗 Links

Trello board: [Trello](https://trello.com/b/tGMI0GEv/connectify-final-project)   
Deployed app on Heroku: [Connectify](https://www.myawesomeapp.com/)

## Unsolved Problems

Using Redux as a state management, There are several benefits to using Redux for state management in a React application. These benefits include: Centralized State Management: Redux provides a centralized state management system that can be accessed by all components. This makes it easier to manage state in large applications.   

## Future Enhancements

Include multi-user, real-time communications (Chat)

## Feedback

If you have any feedback, please reach out to me at aaotmane@gmail.com



