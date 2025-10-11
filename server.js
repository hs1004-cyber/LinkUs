// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Render의 Environment에 DATABASE_URL(Neon 접속 문자열)이 설정되어 있어야 함
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 헬스체크
app.get('/', (_, res) => res.send('LinkUs API OK'));
app.get('/healthz', async (_, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// 로그 추가 (프런트에서 호출)
app.post('/api/logs', async (req, res) => {
  const { user_id, action, detail } = req.body || {};
  await pool.query(
    'INSERT INTO logs (user_id, action, detail) VALUES ($1,$2,$3)',
    [user_id || null, action || null, detail || null]
  );
  res.json({ ok: true });
});

// 관리자 조회: 기본 지난 7일 (UTC 저장, 범위 조회)
app.get('/api/admin/logs', async (req, res) => {
  const days = Number(req.query.days ?? 7);
  const end = new Date(); // now (UTC)
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);

  const { rows } = await pool.query(
    `SELECT id, user_id, action, detail, created_at
     FROM logs
     WHERE created_at BETWEEN $1 AND $2
     ORDER BY id DESC`,
    [start.toISOString(), end.toISOString()]
  );
  res.json(rows);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('API running on', port));
