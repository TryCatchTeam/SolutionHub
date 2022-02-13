from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import ApplicationSerializer, LoginSerializer, UserSerializer, RegisterSerializer, JobSerializer
from knox.models import AuthToken
from .models import Job, Application, NewUser
from django.shortcuts import get_object_or_404

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# Job viewset
class JobViewSet(viewsets.ModelViewSet):
    permission_class = [
        permissions.IsAuthenticated
    ]

    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.all()

    def perform_create(self, serializer):
        serializer.save(creator = self.request.user)

    @action(detail=True)
    def get_creator(self, request, pk=None):
        job = get_object_or_404(Job, id=pk)
        serializer = UserSerializer(job.creator)
        return Response(serializer.data)
    



# Application viewset
class ApplicationViewSet(viewsets.ModelViewSet):

    permission_class = [permissions.IsAuthenticated]

    serializer_class = ApplicationSerializer

    def get_queryset(self):
        return self.request.user.application_set.all()
    
