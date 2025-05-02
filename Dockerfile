# استخدم صورة Node الرسمية
FROM node:18

# إعداد مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ ملفات المشروع إلى الحاوية
COPY package*.json ./
COPY index.js .
COPY index.html .

# تثبيت التبعيات
RUN npm install

# تحديد البورت المستخدم
EXPOSE 3000

# الأمر لتشغيل التطبيق
CMD ["npm", "start"]