import * as _ from "lodash";

import{ Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataFilter"
})

export class DataFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {

    if (query) {

      return _.filter(array, row => {
        for (const col in row) {
          if (typeof row[col] === "string") {

            const result = row[col].toLowerCase().indexOf(query.toLowerCase()) > -1;

            if (result) {
              return true;
            }

          } else if (typeof row[col] === "object") {
            for (const subCol in row[col]) {
              if (typeof row[col][subCol] === "string") {

                const result = row[col][subCol].toLowerCase().indexOf(query.toLowerCase()) > -1;

                if (result) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      });

    }

    return array;

  }

}