import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// app.post("/contact", (req, res) => {
//   const { name, email, message } = req.body;
//   console.log("Received contact:", { name, email, message });

//   res.json({ success: true, message: "Message received" });
// });

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
