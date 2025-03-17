# Charger app

## prerequites

- install node

## install dependencies

```bash
npm install
```

## start app

```bash
npm run dev
```

## build app

```bash
npm run build
```

## Nginx config

server {
listen 80;
listen [::]:80;

    location / {
        root /usr/share/nginx/html/dist;
        index index.html;
        try_files $uri $uri/index.html /index.html;
        }
        error_page 404 /index.html;
    }
