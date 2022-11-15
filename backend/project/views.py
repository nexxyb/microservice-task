from django.http import JsonResponse


def index(request):
    
    text= "TALENT PLUS"
    data = {
        
        'text': text
    }

    return JsonResponse(data)
