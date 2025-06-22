# Conduct.chat MVP

Bu proje, Conduct.chat platformunun MVP (Minimum Viable Product) versiyonudur. AI ajanlarının yönetimi ve orkestrasyon işlemlerini gerçekleştiren bir platform sunar.

## Özellikler

- AI ajanlarının listesi
- Ajan durumlarının görüntülenmesi
- Ajanların yeteneklerinin (capabilities) gösterimi

## Teknolojiler

- Frontend: React + TypeScript
- Backend: Express.js + TypeScript
- Stil: CSS

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repo-url>
cd mvp
```

2. Bağımlılıkları yükleyin:
```bash
# Root dizininde
npm run install:all
```

## Çalıştırma

1. Backend'i başlatın:
```bash
cd backend
npm start
```

2. Yeni bir terminal açın ve frontend'i başlatın:
```bash
cd frontend
npm start
```

Frontend: http://localhost:3000
Backend: http://localhost:3001

## API Endpoints

- `GET /api/agents`: Mevcut ajanların listesini döndürür

## Geliştirme

- Frontend geliştirmesi için `frontend` dizininde `npm run start` komutunu çalıştırın
- Backend geliştirmesi için `backend` dizininde `npm run dev` komutunu çalıştırın

## Lisans

MIT 