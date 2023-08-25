import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconv'
})
export class CurrencyconvPipe implements PipeTransform {

  transform(value: number, from:string,to:string): any {

    if(from == to)
    {
      return value;
    }

    if(from == '0.876893')
    {
      from = 'GBP';
    }
    else if (from == '1.126735') 
    {
      from = 'USD';
    } 
    else {
      from = 'INR';
    }

    if (to == '0.876893') 
    {
      to = 'GBP';
    } 
    else if (to == '1.126735') 
    {
      to = 'USD';
    } 
    else 
    {
      to = 'INR';
    }

    interface Exchange {
      id :string;
      value :number;
    }

    const exchangeRates: Exchange[] = 
    [
      {id: 'USD',  value: 1.126735 },
      {id: 'GBP',  value: 0.876893 },
      {id: 'INR',  value: 79.677056}
    ];

    const fromvalue: any = exchangeRates.find((exchange) => exchange.id == from)!.value;

    const tovalue: any = exchangeRates.find((exchange) => exchange.id == to)!.value;

    let result: number = Math.round((value * tovalue) / fromvalue);

    return result.toFixed(2);
  }

}

