import { Component, OnInit } from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: true,
    inline: true,
    dateFormat: 'dd.mm.yyyy',
    selectorHeight: '300px',
    selectorWidth: '300px',
    stylesData: {
      selector: 'dp1',
      styles: `
           .dp1 .myDpHeaderBtn {
              font-size: 20px;
              font-weight: bold;
              color: #191aa5;
           }
           .dp1 .myDpWeekDayTitle {
              font-size: 16px;
              font-weight: bold;
              color: #191aa5;
           }
           .dp1 .myDpCurrMonth,
           .dp1 .myDpMonthcell,
           .dp1 .myDpYearcell {
              font-size: 18px;
              font-weight: bold;
              color: #191aa5;
           }
           .dp1 .myDpPrevMonth,
           .dp1 .myDpNextMonth {
              color: cornflowerblue;
              font-weight: bold;
           }
           .dp1 .myDpMonthNbr {
              font-size: 14px;
           }
           .dp1 .myDpMarkCurrDay,
           .dp1 .myDpMarkCurrMonth,
           .dp1 .myDpMarkCurrYear {
              border-bottom: 2px solid #191aa5;
           }
           .dp1 .myDpDisabled {
              color: #999;
           }
           .dp1 .myDpHeaderBtn:focus,
           .dp1 .myDpMonthLabel:focus,
           .dp1 .myDpYearLabel:focus {
              color: #FFDAB9;
           }
           .dp1 .myDpDaycell:focus,
           .dp1 .myDpMonthcell:focus,
           .dp1 .myDpYearcell:focus {
              box-shadow: inset 0 0 0 1px #F4A460;
           }
           .dp1 .myDpSelector:focus {
              box-shadow: -1px 1px 6px 0px #FADABF;
           }
           .dp1 .myDpSelectorArrow:focus:before {
              border-bottom-color: #FADABF;
           }
           .dp1 .myDpHeaderBtnEnabled:hover,
           .dp1 .myDpMonthLabel:hover,
           .dp1 .myDpYearLabel:hover,
           .dp1 .myDpFooterBtn:hover {
              color: #F0E68C;
           }
           .dp1 .myDpTableSingleDay:hover,
           .dp1 .myDpTableSingleMonth:hover,
           .dp1 .myDpTableSingleYear:hover {
              background-color: #F0E68C;
              color: #113B08;
           }
           .dp1 .yogaDates {
                 background-color: beige;
                 color: darkviolet;
                 box-shadow: inset 0 0 0 1px #66afe9;
                 font-weight: bold;
                 border-radius: 8px;
              }

              .dp1 .karateDates {
                 background: repeating-linear-gradient(-45deg, red 7px,
                         #ccc 8px, transparent 7px, transparent 14px);
                 color: darkgreen;
                 font-weight: bold;
              }

              .dp1 .boxingDates {
                 background: repeating-linear-gradient(45deg, green 7px,
                         #ccc 8px, lightgreen 7px, transparent 14px);
                 color: fuchsia;
                 font-weight: bold;
              }

              .dp1 .yogaAndKarateDates {
                 background: repeating-linear-gradient(-45deg, #ccc 7px,
                        #ccc 8px, transparent 7px, transparent 14px);
                 color: red;
                 font-weight: bold;
              }
         `
    },
    //   styles: `
    //           .dp1 .yogaDates {
    //              background-color: beige;
    //              color: darkviolet;
    //              box-shadow: inset 0 0 0 1px #66afe9;
    //              font-weight: bold;
    //              border-radius: 8px;
    //           }
    //
    //           .dp1 .karateDates {
    //              background: repeating-linear-gradient(-45deg, red 7px,
    //                      #ccc 8px, transparent 7px, transparent 14px);
    //              color: darkgreen;
    //              font-weight: bold;
    //           }
    //
    //           .dp1 .boxingDates {
    //              background: repeating-linear-gradient(45deg, green 7px,
    //                      #ccc 8px, lightgreen 7px, transparent 14px);
    //              color: fuchsia;
    //              font-weight: bold;
    //           }
    //
    //           .dp1 .yogaAndKarateDates {
    //              background: repeating-linear-gradient(-45deg, #ccc 7px,
    //                     #ccc 8px, transparent 7px, transparent 14px);
    //              color: red;
    //              font-weight: bold;
    //           }
    //         `
    // },
    markDates: [
      {
        // yoga dates
        dates: [{day: 1, month: 7, year: 2023}, {day: 6, month: 6, year: 2023}],
        styleClass: 'yogaDates'
      },
      {
        // karate dates
        dates: [{day: 2, month: 7, year: 2023}, {day: 4, month: 6, year: 2023}],
        styleClass: 'karateDates'
      },
      {
        // boxing dates
        dates: [{day: 26, month: 7, year: 2023}, {day: 27, month: 6, year: 2023}],
        styleClass: 'boxingDates'
      },
      {
        // yoga and karate dates
        color: 'red',     // this shows red triangle on top-left of the date
        dates: [{day: 17, month: 7, year: 2023}, {day: 18, month: 6, year: 2023}],
        styleClass: 'yogaAndKarateDates'
      },
      {
        // yoga and karate dates
        color: 'red',     // this shows red triangle on top-left of the date
        dates: [{day: 27, month: 7, year: 2023}, {day: 28, month: 6, year: 2023}],
        styleClass: 'yogaAndKarateDates'
      }],
    // other options here
  }

  model: IMyDateModel = null;
  constructor() { }

  ngOnInit(): void {
  }

}
