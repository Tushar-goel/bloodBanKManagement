import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shareSearchFilter'
})
export class ShareSearchFilterPipe implements PipeTransform {
	transform(value: any, term: any, flag: any): any {
		if (term === undefined || term === '') {
			return value;
		}

		// for university generate list page course search
		// if (flag == 'uni-gen-list-course') {
		// 	let filterArray = value.filter((resume) => {
		// 		if (resume.toLowerCase().includes(term.toLowerCase())) {
		// 			return true;
		// 		}
		// 	});
		// 	filterArray = filterArray.length ? filterArray : [ 'No Course Found !!' ];
		// 	return filterArray;
		// } 
		
	}
}
