import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Rodando na porta 3000 - ${process.env.PROJECT_NAME}`);
});
