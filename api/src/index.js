const app = require('express')();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res ) => 
   // res.json({ blogs: 'Its party time chumps!', message: 'Its party time chumps!' }) 
    res.json([
      {
        "id":"1",
        "title":"Book Review: The Name of the Wind"
      },
      {
        "id":"2",
        "title":"Game Review: Pokemon Brillian Diamond"
      },
      {
        "id":"3",
        "title":"Show Review: Alice in Borderland"
      }
    ])
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`we are listening on http://localhost:${port}`) );