import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BreakdownHomeComponent } from './breakdown-home/breakdown-home.component';
import { GraphEventsHandledComponent } from './breakdown-home/events-handled/graph-events-handled/graph-events-handled.component';
import { GraphEventsHandledWeekComponent } from './breakdown-home/events-handled/graph-events-handled-week/graph-events-handled-week.component';
import { GraphEventsHandledMonthComponent } from './breakdown-home/events-handled/graph-events-handled-month/graph-events-handled-month.component';
import { GraphCallDurationComponent } from './breakdown-home/call-duration/graph-call-duration/graph-call-duration.component';
import { GraphCallsTakenComponent } from './breakdown-home/calls-taken/graph-calls-taken/graph-calls-taken.component';
import { ComponentSidnavComponent } from './component-sidnav/component-sidnav.component';
import { GraphCallDurationMyStatsComponent } from './breakdown-home/call-duration/graph-call-duration-my-stats/graph-call-duration-my-stats.component';
import { GraphCallDurationTimeWaitingComponent } from './breakdown-home/call-duration/graph-call-duration-time-waiting/graph-call-duration-time-waiting.component';

// ANGULAR MATERIAL COMPONENT IMPORTS //
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyStatsComponent } from './breakdown-home/my-stats/my-stats.component';
import { GraphCallsTakenWeekComponent } from './breakdown-home/calls-taken/graph-calls-taken-week/graph-calls-taken-week.component';
import { GraphCallsTakenTodayComponent } from './breakdown-home/calls-taken/graph-calls-taken-today/graph-calls-taken-today.component';
import { EventHandleTimeComponent } from './breakdown-home/event-handle-time/event-handle-time.component';
import { GraphCallDurationMyStatsTimeWaitingComponent } from './breakdown-home/call-duration/graph-call-duration-my-stats-time-waiting/graph-call-duration-my-stats-time-waiting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreakdownHomeComponent,
    GraphEventsHandledComponent,
    GraphEventsHandledWeekComponent,
    GraphEventsHandledMonthComponent,
    GraphCallDurationComponent,
    GraphCallsTakenComponent,
    ComponentSidnavComponent,
    MyStatsComponent,
    GraphCallDurationMyStatsComponent,
    GraphCallDurationTimeWaitingComponent,
    GraphCallsTakenWeekComponent,
    GraphCallsTakenTodayComponent,
    EventHandleTimeComponent,
    GraphCallDurationMyStatsTimeWaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    MatTreeModule,
    ClipboardModule,
    NgApexchartsModule,
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
