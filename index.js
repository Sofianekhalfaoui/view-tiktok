const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.json());

// تقديم ملف index.html مباشرة عند زيارة الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// نقطة استقبال البيانات من النموذج
app.post('/sendViews', async (req, res) => {
  const { link, count } = req.body;

  try {
    const response = await axios.post('https://justanotherpanel.com/api/v2', {
      key: '90f2874f542a9d30d319c4b3a03b1eaf',
      action: 'add',
      service: 16488,
      link: link,
      quantity: count
    });

    res.json({ success: true, order: response.data.order });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});