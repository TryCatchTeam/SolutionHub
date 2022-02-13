from rest_framework import serializers
from .models import NewUser, Job, Application
from django.contrib.auth import authenticate


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('id', 'username', 'email', 'firstname', 'lastname', 'organization', 'role', 'description')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser  
        fields = ('id', 'username', 'email', 'password', 'firstname', 'lastname', 'organization', 'role', 'description')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = NewUser.objects.create_user(validated_data['email'], validated_data['username'], validated_data['password'])
        user.firstname = validated_data['firstname']
        user.lastname = validated_data['lastname']
        user.organization = validated_data['organization']
        user.role = validated_data['role']
        user.description = validated_data['description']

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

# Job Serializer
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        # fields = ('title', 'type', 'price', 'description', 'skills', 'isPublic', 'isCompleted')
        fields = '__all__'

# Application Serializer
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'