FROM  python:3.9.6-alpine

ENV PYTHONUNBUFFERED=1

WORKDIR /api
 

COPY . .

RUN pip install django django-cors-headers

EXPOSE 8000