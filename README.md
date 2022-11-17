# GimnasioApp

1. Agregar en App Modules Reactive Forms
2. Agregar rutas en App Routing de los nuevos componentes
3. Editar-Perfil.HTML agregar Form de Bootstrap
4. Editar-Perfil.TS llamar a la API, crear Formulario en cargarDatos() y cargar datos en el Formulario, crear enviar() y cancelar()
5. En Vista-Perfil.HTML llamar a la funcion de editar(perfil.id)
6. En Vista-Perfil.TS agregar la funcion de editar(id:string) que reenvia por Routes a el componente de Editar-Perfil
7. En Service de UsuarioService crear funcion de editar(perfil:Perfil)
8. En Perfil.TS Modelo agregar ID y Actividades:string[]
9. Agregar el nuevo componente de ListadoPerfil a Vista-Perfil.HTML
10. En Listado-Perfil.HTML crear la tabla de Bootstrap que recorra las actividades
11. En Listado=Perfil.TS recibir como Input() las actividades
12. En el caso de redirigir al Perfil editado o cancelar (seteo el ID al traerlo de PARAMS) crear en UsuarioService un setId() y un getId() donde haya un id=0 y desde Vista-Perfil.ts se valide para ver si trae uno random o no