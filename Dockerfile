FROM public.ecr.aws/docker/library/nginx:stable-bullseye

COPY --chmod=765 ./public-html /usr/share/nginx/html

EXPOSE 80