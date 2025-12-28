FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY app/ /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY favicon.ico /usr/share/nginx/html/
COPY banner.png /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
