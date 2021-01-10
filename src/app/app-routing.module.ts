import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProductoDetalleComponent } from './paginas/producto-detalle/producto-detalle.component';
import { ProductosCategoriasComponent } from './paginas/productos-categorias/productos-categorias.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CheckoutComponent } from './paginas/checkout/checkout.component';
import { MisComprasComponent } from './paginas/mis-compras/mis-compras.component';
import { MiCuentaComponent } from './paginas/mi-cuenta/mi-cuenta.component';


const routes: Routes = [
  {path : "",component:HomeComponent},
  {path : "login", component:LoginComponent},
  {path :"registro", component:RegistroComponent},
  {path : "productos", component:ProductosComponent},
  {path: "producto/:id", component:ProductoDetalleComponent},
  {path : "producto/categorias/:id" , component : ProductosCategoriasComponent },
  {path: "sobre-nosotros" , component:SobreNosotrosComponent},
  {path : "checkout", component:CheckoutComponent},
  {path : "mis-compras",component:MisComprasComponent},
  {path : "mi-cuenta" , component: MiCuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
