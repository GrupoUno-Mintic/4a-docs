from rest_framework import serializers
from InventoriesApp.models.inventario import Inventario
from InventoriesApp.models.tienda import Tienda
from InventoriesApp.serializers.tiendaSerializer import TiendaSerializer


class InventarioSerializer(serializers.ModelSerializer):
    #tienda = TiendaSerializer()
    class Meta:
        model = Inventario
        fields = ['codigo_barras', 'nombre_prod', 'descripcion', 'talla', 'cantidad',
                  'fecha_ingreso', 'precio_compra', 'precio_venta', 'nit_tienda']

    '''
    def create(self, validated_data):
        tiendaData = validated_data.pop('nit_tienda')
        inventarioInstance = Inventario.objects.create(**validated_data)
        Inventario.objects.create(inventario=inventarioInstance, **tiendaData)
        return inventarioInstance
    
    
    def to_representation(self,obj):
        inventario = Inventario.objects.get(id=obj.codigo_barras)
        tienda = Tienda.objects.get(inventario=obj.id)  # REVISAR <<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>
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
        '''
