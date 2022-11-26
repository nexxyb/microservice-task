FROM  alpine
RUN apk add py3-pip
WORKDIR /backend

RUN pip install django django-cors-headers 

COPY . .
ENTRYPOINT ["python"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]


EXPOSE 8000