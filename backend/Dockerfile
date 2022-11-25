FROM  python:3.8-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /backend
 

COPY . .

RUN pip install django==4.1 django-cors-headers
CMD ["python", "manage.py", "runserver", ]
EXPOSE 8000