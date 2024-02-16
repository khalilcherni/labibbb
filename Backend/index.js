const express = require('express')
const cors=require('cors')
const app = express()
const PORT = 3000;
const route1 = require("./routes/materialsRoute");
const route2 = require("./routes/eventRoute");


app.use(cors());

app.use(express.json())

app.use("/materials", route1);
app.use("/events", route2);



app.get('/', (req, res) => {
  res.send('Server Listening');
})

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});