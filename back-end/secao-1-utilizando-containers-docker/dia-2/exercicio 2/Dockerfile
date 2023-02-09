# legacy dockerfile (builds differently not recommended)
# FROM nginx:1.21-alpine AS first-stage
# WORKDIR /site

# COPY config.toml config.toml
# COPY index.html /site/layouts/index.html
# COPY _index.md /site/content/_index.md

# RUN apk add hugo
# RUN hugo --minify --gc
# RUN mv /site/public/* /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# multi stage dockerfile (eficient image builder, recommended whenever possible)
FROM alpine:3.14 AS first-stage
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# second stage
FROM nginx:1.21-alpine AS second-stage
COPY --from=first-stage /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]