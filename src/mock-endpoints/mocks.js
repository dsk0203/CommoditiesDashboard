const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


// This setes the mock adapter on the defualt instance
const mock = new MockAdapter(axios);

// data endpoints
mock.onGet('/api/data/economy_data').reply(200, require('./fixtures/economy_data.json'))

// dashboard list endpoint
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