from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class CustomAccountManager(BaseUserManager):

    def create_user(self, email, username, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **other_fields)
        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, username, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('superuser must be true')

        return self.create_user(email, username, password, **other_fields)


class Organization(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Type(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    firstname = models.CharField(max_length=150, blank=True)
    lastname = models.CharField(max_length=150, blank=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='users', null=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, related_name='users', null=True)
    description = models.TextField(max_length=500, blank=True)
    # jobs_applied = models.ManyToManyField()

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username


class Job(models.Model):
    creator = models.ForeignKey(NewUser, on_delete=models.CASCADE) 
    title = models.CharField(max_length=200)
    type = models.ForeignKey(Type, on_delete=models.SET_NULL, null=True)
    price = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    isPublic = models.BooleanField(default=False)
    employees = models.ManyToManyField(NewUser, related_name='ongoing_jobs', blank=True)
    isCompleted = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Application(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    state = models.CharField(max_length=100)
    skills = models.TextField()
    why_suitable = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    



