from rest_framework import serializers
from InventoriesApp.models import inventario
from InventoriesApp.models.inventario import Inventario
from InventoriesApp.models.tienda import Tienda
from InventoriesApp.serializers.tiendaSerializer import TiendaSerializer


class InventarioSerializer(serializers.ModelSerializer):
    tienda = TiendaSerializer()
    class Meta:
        model = Inventario
        fields = ['codigo_barras', 'nombre_prod', 'descripcion', 'fecha_vencimiento',
                  'fecha_ingreso', 'precio_compra', 'precio_venta', 'nit_tienda']

    
    def create(self, validated_data):
        tiendaData = validated_data.pop('tienda')
        inventarioInstance = Inventario.objects.create(**validated_data)
        Tienda.objects.create(inventario=inventarioInstance, **tiendaData)
        return inventarioInstance
   
    
    def to_representation(self,obj):
        inventario = Inventario.objects.get(id=obj.id)
        tienda = Tienda.objects.get(inventario=obj.id)
        return{
            'codigo_barras': inventario.codigo_barras,
            'nombre_prod': inventario.nombre_prod,
            'descripcion': inventario.descripcion,
            'fecha_vencimiento': inventario.fecha_vencimiento,
            'fecha_ingreso': inventario.fecha_ingreso,
            'precio_compra': inventario.precio_compra,
            'precio_venta': inventario.precio_venta,
            'nit_tienda':{
                'nit': tienda.nit,
                'nombre': tienda.nombre_misc,
                'direccion': tienda.direccion_misc
            }    
        }
