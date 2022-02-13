from django.contrib import admin
from .models import NewUser, Organization, Role, Type, Job, Application

# Register your models here.
admin.site.register(NewUser)
admin.site.register(Organization)
admin.site.register(Role)
admin.site.register(Type)
admin.site.register(Job)
admin.site.register(Application)
