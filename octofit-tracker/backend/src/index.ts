import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URL = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'OctoFit Tracker backend' });
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connected at ${MONGO_URL}`);
    console.log(`Backend listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
});
