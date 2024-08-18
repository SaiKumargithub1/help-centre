const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(express.json());

const cardsData = [
  {
    id: 1,
    title: "Branches",
    description: "Manage, version, and document your designs in one place.",
  },
  {
    id: 2,
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    id: 3,
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    id: 4,
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
  },
  {
    id: 5,
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    id: 6,
    title: "Abstract support",
    description: "Get in touch with a human.",
  },
];

// API endpoint to get all card data
app.get("/api/help-center", (req, res) => {
  res.json(cardsData);
});

// API endpoint to add a new card
app.post("/cards", (req, res) => {
  const { title, description, link } = req.body;
  if (!title || !description || !link) {
    return res.status(400).send("Missing required fields");
  }
  const newCard = { id: Date.now().toString(), title, description, link };
  cardsData.push(newCard); 
  res.status(201).json(newCard);
});

// API endpoint to get all cards
app.get("/cards", (req, res) => {
  res.json(cardsData);
});

// API endpoint to get a specific card by title
app.get("/cards/:title", (req, res) => {
  const { title } = req.params;
  const card = cardsData.find((c) => c.title === title); 
  if (!card) {
    return res.status(404).send("Card not found");
  }
  res.json(card);
});


app.use(express.static(path.join(__dirname, "public")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
