const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


// This setes the mock adapter on the defualt instance
const mock = new MockAdapter(axios);

// data endpoints
mock.onGet('/api/data/economy_data').reply(200, require('./fixtures/economy_data.json'))

// dashboard list endpoint
mock.onGet('/api/blog-list').reply(200, 
      [
    {
       title: "How I was able to break into data science",
       date: '4/15/2015',
       description: "Breaking into data science wasn't easy, but with these steps we are ....",
       value_1: "value 1",
       type_1: "type 1",
       value_2: "value 2",
       type_2: "type 2",
       value_3: "type 3",
       value_3: "value 3",
       image_link: 'https://cdn.pixabay.com/photo/2020/09/16/11/48/donkeys-5576167_960_720.jpg'
    },
    {
      title: "some_blog_post_2",
      date: '4/21/2015',
      description: "Org Repository Insights",
      value_1: "value 1",
      type_1: "type 1",
      value_2: "value 2",
      type_2: "type 2",
      value_3: "type 3",
      value_3: "value 3",
      image_link: 'https://cdn.pixabay.com/photo/2021/04/21/13/20/cherry-blossoms-6196363_960_720.jpg'
   }
   ]
                              )

 // blog list endpoint
mock.onGet('/api/dashboard-list').reply(200, [
   {
      path: "some_blog_post",
      title: "Org Repository Insights",
      description: "we are off to see the wizard, the wonderful wizard of oz"
   },
   {
      path: "temp",
      title: "how we lost our minds",
      description: "omg"
   },
   {
     path: "temp",
     title: "how we lost our minds",
     description: "omg"
  },
  {
     path: "temp",
     title: "how we lost our minds",
     description: "omg"
  },

])