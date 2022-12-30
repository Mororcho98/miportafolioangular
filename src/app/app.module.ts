import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { LoginmodalComponent } from './Modals/loginmodal/loginmodal.component';
import { RedesComponent } from './index/redes/redes.component';
import { BannerComponent } from './index/banner/banner.component';
import { SobremiComponent } from './index/sobremi/sobremi.component';
import { ExperienciaComponent } from './index/experiencia/experiencia.component';
import { HabilidadesComponent } from './index/habilidades/habilidades.component';
import { ProyectosComponent } from './index/proyectos/proyectos.component';
import { IntroComponent } from './index/intro/intro.component';
import { BannerdeletemodalComponent } from './Modals/bannerdeletemodal/bannerdeletemodal.component';
import { EducacionComponent } from './index/educacion/educacion.component';



import { LogoutComponent } from './Modals/logout/logout.component';
import { RedesmodalComponent } from './Modals/redesmodal/redesmodal.component';
import { BannermodalComponent } from './Modals/bannermodal/bannermodal.component';
import { SobremimodalComponent } from './Modals/sobremimodal/sobremimodal.component';
import { FotoperfilmodalComponent } from './Modals/fotoperfilmodal/fotoperfilmodal.component';
import { ExperienciaplusmodalComponent } from './Modals/experienciaplusmodal/experienciaplusmodal.component';
import { ExperienciamodalComponent } from './Modals/experienciamodal/experienciamodal.component';
import { ExperienciadeletemodalComponent } from './Modals/experienciadeletemodal/experienciadeletemodal.component';
import { EducacionplusmodalComponent } from './Modals/educacionplusmodal/educacionplusmodal.component';
import { EducacionmodalComponent } from './Modals/educacionmodal/educacionmodal.component';
import { EducaciondeletemodalComponent } from './Modals/educaciondeletemodal/educaciondeletemodal.component';
import { ProyectoplusmodalComponent } from './Modals/proyectoplusmodal/proyectoplusmodal.component';
import { ProyectomodalComponent } from './Modals/proyectomodal/proyectomodal.component';
import { ProyectodeletemodalComponent } from './Modals/proyectodeletemodal/proyectodeletemodal.component';
import { HabilidadplusmodalComponent } from './Modals/habilidadplusmodal/habilidadplusmodal.component';
import { HabilidadhardmodalComponent } from './Modals/habilidadhardmodal/habilidadhardmodal.component';
import { HabilidadsoftmodalComponent } from './Modals/habilidadsoftmodal/habilidadsoftmodal.component';
import { HabilidadharddeletemodalComponent } from './Modals/habilidadharddeletemodal/habilidadharddeletemodal.component';
import { HabilidadsoftdeletemodalComponent } from './Modals/habilidadsoftdeletemodal/habilidadsoftdeletemodal.component';



import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbardashboardComponent } from './dashboard/navbar(editor)/navbardashboard/navbardashboard.component';
import { BotonesbannerComponent } from './dashboard/banner(editor)/botonesbanner/botonesbanner.component';
import { BotonesdashboardComponent } from './dashboard/navbar(editor)/botonesdashboard/botonesdashboard.component';
import { BannerdashboardComponent } from './dashboard/banner(editor)/bannerdashboard/bannerdashboard.component';
import { SobremidashboardComponent } from './dashboard/sobremi(editor)/sobremidashboard/sobremidashboard.component';
import { BotonsobremiComponent } from'./dashboard/sobremi(editor)/botonsobremi/botonsobremi.component';
import { ExperienciadashboardComponent } from './dashboard/experiencia(editor)/experienciadashboard/experienciadashboard.component';
import { CardexperienciaComponent } from './dashboard/experiencia(editor)/cardexperiencia/cardexperiencia.component';
import { BotonescardexperienciaComponent } from './dashboard/experiencia(editor)/botonescardexperiencia/botonescardexperiencia.component';
import { BotonplusexperienciaComponent } from './dashboard/experiencia(editor)/botonplusexperiencia/botonplusexperiencia.component';
import { HabilidadesdashboardComponent } from './dashboard/habilidad{editor)/habilidadesdashboard/habilidadesdashboard.component';
import { EducaciondashboardComponent } from './dashboard/educacion(editor)/educaciondashboard/educaciondashboard.component';
import { ProyectosdashboardComponent } from './dashboard/proyectos(editor)/proyectosdashboard/proyectosdashboard.component';
import { BotoneseducacionComponent } from './dashboard/educacion(editor)/botoneseducacion/botoneseducacion.component';
import { BotonpluseducacionComponent } from './dashboard/educacion(editor)/botonpluseducacion/botonpluseducacion.component';
import { CardeducacionComponent } from './dashboard/educacion(editor)/cardeducacion/cardeducacion.component';
import { BotonplushabilidadComponent } from './dashboard/habilidad{editor)/botonplushabilidad/botonplushabilidad.component';
import { CardhabilidadComponent } from './dashboard/habilidad{editor)/cardhabilidad/cardhabilidad.component';
import { BotoneshabilidadComponent } from './dashboard/habilidad{editor)/botoneshabilidad/botoneshabilidad.component';
import { BotoneshabilidadhardComponent } from './dashboard/habilidad{editor)/botoneshabilidadhard/botoneshabilidadhard.component';
import { BarraprogresohardComponent } from './dashboard/habilidad{editor)/barraprogresohard/barraprogresohard.component';
import { BarraprogresosoftComponent } from './dashboard/habilidad{editor)/barraprogresosoft/barraprogresosoft.component';
import { BotonplusproyectoComponent } from './dashboard/proyectos(editor)/botonplusproyecto/botonplusproyecto.component';
import { BotonesproyectoComponent } from './dashboard/proyectos(editor)/botonesproyecto/botonesproyecto.component';
import {ProyectocarouselComponent} from './dashboard/proyectos(editor)/proyectocarousel/proyectocarousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginmodalComponent,
    RedesComponent,
    BannerComponent,
    SobremiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    DashboardComponent,
    IntroComponent,
    NavbardashboardComponent,
    LogoutComponent,
    RedesmodalComponent,
    BotonesdashboardComponent,
    BannerdashboardComponent,
    BannermodalComponent,
    BotonesbannerComponent,
    BannerdeletemodalComponent,
    SobremimodalComponent,
    FotoperfilmodalComponent,
    SobremidashboardComponent,
    BotonsobremiComponent,
    ExperienciaplusmodalComponent,
    ExperienciamodalComponent,
    ExperienciadeletemodalComponent,
    ExperienciadashboardComponent,
    CardexperienciaComponent,
    BotonescardexperienciaComponent,
    BotonplusexperienciaComponent,
    HabilidadesdashboardComponent,
    EducacionComponent,
    EducacionplusmodalComponent,
    EducacionmodalComponent,
    EducaciondeletemodalComponent,
    ProyectoplusmodalComponent,
    ProyectomodalComponent,
    ProyectodeletemodalComponent,
    HabilidadplusmodalComponent,
    HabilidadhardmodalComponent,
    HabilidadsoftmodalComponent,
    HabilidadharddeletemodalComponent,
    HabilidadsoftdeletemodalComponent,
    EducaciondashboardComponent,
    ProyectosdashboardComponent,
    BotoneseducacionComponent,
    BotonpluseducacionComponent,
    CardeducacionComponent,
    BotonplushabilidadComponent,
    CardhabilidadComponent,
    BotoneshabilidadComponent,
    BotoneshabilidadhardComponent,
    BarraprogresohardComponent,
    BarraprogresosoftComponent,
    BotonplusproyectoComponent,
    BotonesproyectoComponent,
    ProyectocarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
