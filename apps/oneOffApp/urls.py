from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^home$', views.home, name = 'home'),
    url(r'^aboutUs$', views.aboutUs, name = 'aboutUs'),
    url(r'^bloodWedding$', views.bloodWedding, name = 'bloodWedding'),
    url(r'^ourTeam$', views.ourTeam, name ='ourTeam'),
    url(r'^', views.index)
]
