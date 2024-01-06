// Boiler-plate code from https://blog.chatengine.io/fullstack-chat/nodejs-reactjs

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "848c44d2-6192-490c-b3e6-cc2285d7071b" } }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

  //return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);