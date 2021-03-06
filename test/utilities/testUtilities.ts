/// <reference path="../../tsDefinitions/tsd.d.ts" />

module trl.test {
    
    export interface ITestExpectation {
		file: string,
		content: string,
		expect: any 
	}
    
	export class Utilities {
        
		public static expectToEqual(expectVal, tobeVal, msg?: string) {
			if (expectVal !== tobeVal) {
                debugger;
				throw new Error(expectVal + ", " + tobeVal + (msg ? ", msg: " + msg : "") );
			}
			expect(expectVal).toEqual(tobeVal);
		}
        
        private static expectJsonValueEquality(expectVal, tobeVal, msg: string) {
            if(_.isObject(expectVal)) {
                Utilities.expectToEqual(_.isObject(tobeVal), true, `${msg} objects`);                
                Utilities.expectJsonObjectEquality(expectVal, tobeVal, msg);
                
            } else if(_.isArray(expectVal)) {
                Utilities.expectToEqual(_.isArray(tobeVal), true, `${msg} expect is not array`);
                Utilities.expectToEqual(tobeVal.length, expectVal.length, `${msg} arrays dont contain the same items`);
                _.each(expectVal, (item, idx) => Utilities.expectJsonValueEquality(item, tobeVal[idx], msg));
                
            } else {
                Utilities.expectToEqual(
                    _.isString(tobeVal) || _.isNumber(tobeVal) || _.isBoolean(tobeVal) || _.isNull(tobeVal), 
                    true, 
                    `${msg} value should be one of number, string, null, boolean, array, object`
                );
                Utilities.expectToEqual(expectVal, tobeVal, `${msg} values`);
            }
        }
        
        public static expectJsonObjectEquality(expectObj, tobeObj, msg: string) {
            Utilities.expectToEqual(_.keys(expectObj).length, _.keys(tobeObj).length, `${msg} objects`);
            _.each(expectObj, (val, key: string) => {                                
                Utilities.expectJsonValueEquality(val, tobeObj[key], msg);
            });
        }
        
        public static expectJsonEquality(expectObj, testExpectation: ITestExpectation) {
            const tobeObj = testExpectation.expect;
            const msg = `${testExpectation.file}: `;
            Utilities.expectJsonObjectEquality(expectObj, tobeObj, msg);
        }        
		
		public static getSampleFiles(allFiles: _.Dictionary<string>, sampleFiles: string[]): _.Dictionary<string> {
			
			let charStreamFilenames = _.chain(allFiles)
				.keys()
				.filter(filepath => Utilities.fileExist(filepath, sampleFiles))
				.value();
	
			return _.pick(allFiles, charStreamFilenames);
		}
		
		private static fileExist(filepath: string, sampleFiles: string[]): boolean {
			return _.some(sampleFiles, sampleFile => filepath.indexOf(sampleFile) !== -1);
		}
        
        public static getTestingExpects(allFiles: _.Dictionary<string>, sampleFiles: string[]): ITestExpectation[] {
            const charStreamFiles = trl.test.Utilities.getSampleFiles(allFiles, sampleFiles);
                     
            let testingSamples = _.chain(charStreamFiles)
                .keys()
                .filter(filename => filename.indexOf(".expect.js") === -1)
                .value();

            return _.map(testingSamples, testingSample => {
                let expectFilename = testingSample.substring(0, testingSample.length - 3) + ".expect.js";
                return {
                    file: testingSample,
                    content: charStreamFiles[testingSample],
                    expect: JSON.parse(charStreamFiles[expectFilename])
                };
            });
        }
	}
}