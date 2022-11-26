FROM  python:3.9.6-alpine

WORKDIR /backend

RUN pip install django django-cors-headers 

COPY . .
#ENTRYPOINT ["python3"] 
#CMD ["manage.py", "runserver", "127.0.0.1:8000"]


EXPOSE 8000