import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WisdomHeaderComponent } from './wisdom-header/wisdom-header.component';
import { WisdomCouraselComponent } from './wisdom-courasel/wisdom-courasel.component';
import { ServicesComponent } from './services/services.component';
import { WisdomGoalComponent } from './wisdom-goal/wisdom-goal.component';
import { WisdomTestimonialComponent } from './wisdom-testimonial/wisdom-testimonial.component';
import { WisdomFooterComponent } from './wisdom-footer/wisdom-footer.component';
import { WisdomPlanComponent } from './wisdom-plan/wisdom-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    WisdomHeaderComponent,
    WisdomCouraselComponent,
    ServicesComponent,
    WisdomGoalComponent,
    WisdomTestimonialComponent,
    WisdomFooterComponent,
    WisdomPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
