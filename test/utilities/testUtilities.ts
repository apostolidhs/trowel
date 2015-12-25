/// <reference path="../../tsDefinitions/tsd.d.ts" />

module trl.test {
	export class Utilities {
		static expectToEqual(expectVal, tobeVal, msg) {
			if (expectVal !== tobeVal) {
				throw new Error(expectVal + ", " + tobeVal + ", msg: " + msg);
			}
			expect(expectVal).toEqual(tobeVal);
		}
		
		static getSampleFiles(allFiles: _.Dictionary<string>, sampleFiles: string[]): _.Dictionary<string> {
			
			let charStreamFilenames = _.chain(allFiles)
				.keys()
				.filter(filepath => Utilities.fileExist(filepath, sampleFiles))
				.value();
	
			return _.pick(allFiles, charStreamFilenames);
		}
		
		private static fileExist(filepath: string, sampleFiles: string[]): boolean {
			return _.some(sampleFiles, sampleFile => filepath.indexOf(sampleFile) !== -1);
		}
	}
}