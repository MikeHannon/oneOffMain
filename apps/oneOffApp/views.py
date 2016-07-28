from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'oneOffApp/index.html')

def home(request):
    return render(request,'oneOffApp/partials/home.html')

def aboutUs(request):
    return render(request,'oneOffApp/partials/aboutUs.html')

def ourTeam(request):
    return render(request,'oneOffApp/partials/theTeam.html')

def bloodWedding(request):
    return render(request,'oneOffApp/partials/bloodWedding.html')
