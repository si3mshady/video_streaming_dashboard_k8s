const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/stream';