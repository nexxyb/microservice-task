FROM  python:3.9.6-alpine

WORKDIR /backend

RUN pip install django==4.1.3 django-cors-headers==3.13.0

COPY . .
ENTRYPOINT ["python"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]


EXPOSE 8000