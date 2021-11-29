from django.db.models.query import QuerySet
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from InventoriesApp.models.tienda import Tienda
from InventoriesApp.serializers.tiendaSerializer import TiendaSerializer


class TiendaView(generics.ListAPIView): # Lista todas las tienda
    queryset = Tienda.objects.all()
    serializer_class = TiendaSerializer
    permission_classes = (IsAuthenticated,) #Solo los usuarios autenticados pueden acceder a este endpoint

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = TiendaSerializer(queryset, many=True)
        return Response(serializer.data)

class TiendaCreateView(generics.CreateAPIView): # Crea una miscelanea
    serializer_class= TiendaSerializer
    permission_classes = (IsAuthenticated,) #Solo los usuarios autenticados pueden acceder a este endpoint
    
    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            serializer = TiendaSerializer(data=request.data)  # Datos enviados desde el frontend - type dict
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #return Response(data=None, status=status.HTTP_405_METHOD_NOT_ALLOWED)
