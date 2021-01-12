import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ProductoDetalleComponent } from './paginas/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ProductosCategoriasComponent } from './paginas/productos-categorias/productos-categorias.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import {MatSelectModule} from '@angular/material/select';
import { CheckoutComponent } from './paginas/checkout/checkout.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { MisComprasComponent } from './paginas/mis-compras/mis-compras.component';
import { FiltrosPipe } from './pipes/filtros.pipe';
import { MiCuentaComponent } from './paginas/mi-cuenta/mi-cuenta.component';
import { UsuarioNoRegistradoComponent } from "../app/Dialogos/usuario-no-registrado/usuario-no-registrado.component";
import { ReestablecerPasswordComponent } from "../app/Dialogos/reestablecer-password/reestablecer-password.component";
import { CambioPasswordComponent } from './Dialogos/cambio-password/cambio-password.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ProductoDetalleComponent,
    ProductosComponent,
    ProductosCategoriasComponent,
    RegistroComponent,
    SobreNosotrosComponent,
    CheckoutComponent,
    MisComprasComponent,
    FiltrosPipe,
    MiCuentaComponent,
   UsuarioNoRegistradoComponent,
   ReestablecerPasswordComponent,
   CambioPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule
   
 
   
   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
