FROM  python:3.8-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /backend
 

COPY . .

RUN pip install django==4.1 django-cors-headers
ENTRYPOINT ["python3"] 
#CMD ["manage.py", "runserver", "127.0.0.1:8000"]
EXPOSE 8000