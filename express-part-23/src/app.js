import express from "express";
import bodyParser from "body-parser";

const app = express(),
    port = 4000;

app.use(bodyParser.json());

export { app, port };
