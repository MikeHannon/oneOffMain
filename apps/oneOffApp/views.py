from django.shortcuts import render
import keys
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
    context = {
    'mainKey':key.returnKey()
    }
    return render(request,'oneOffApp/partials/bloodWedding.html',context)
