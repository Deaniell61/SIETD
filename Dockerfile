<<<<<<< HEAD
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/prod /usr/share/nginx/html
EXPOSE 5000
=======
FROM nginx:alpine
COPY dist/* /usr/share/nginx/html/
>>>>>>> b910b1c3e6f6c065b4042a3cac629cec4778e556
