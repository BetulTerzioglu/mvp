import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basit bir API endpoint'i
app.get('/api/agents', (req: Request, res: Response) => {
  // MVP için sabit agent listesi
  const agents = [
    {
      id: 1,
      name: 'Test Agent 1',
      endpoint: 'http://localhost:3002',
      capabilities: ['text-generation', 'translation'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Test Agent 2',
      endpoint: 'http://localhost:3003',
      capabilities: ['image-generation'],
      status: 'active'
    }
  ];
  
  res.json(agents);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 