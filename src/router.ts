import express from 'express';
import got from 'got';
import config from './config';

const router = express.Router();

const BASE_URL = `http://localhost:${config.port}`;
const USER_AGENT = 'manavm1990';

router.get('/*', async (req, res) => {
  const { search, pathname } = new URL(req.url, BASE_URL);

  try {
    const data = await got
      .get(
        `https://api.github.com/repos${pathname}/issues${search ? search : ''}`,
        {
          headers: {
            'User-Agent': USER_AGENT,
            Authorization: `bearer ${config.token}`,
          },
        },
      )
      .json();

    res.json(data);
  } catch (error: any) {
    res
      .status(error.statusCode || 500)
      .json(error.response?.body || { message: 'Internal Server Error' });
  }
});

export default router;
