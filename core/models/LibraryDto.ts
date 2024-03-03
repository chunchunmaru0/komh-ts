/* tslint:disable */
/* eslint-disable */
/**
 * Komga API
 * Komga offers 2 APIs: REST and OPDS.  Both APIs are secured using HTTP Basic Authentication.
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LibraryDto
 */
export interface LibraryDto {
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    root: string;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importComicInfoBook: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importComicInfoSeries: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importComicInfoCollection: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importComicInfoReadList: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importComicInfoSeriesAppendVolume: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importEpubBook: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importEpubSeries: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importMylarSeries: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importLocalArtwork: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    importBarcodeIsbn: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    scanForceModifiedTime: boolean;
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    scanInterval: LibraryDtoScanIntervalEnum;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    scanOnStartup: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    scanCbx: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    scanPdf: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    scanEpub: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof LibraryDto
     */
    scanDirectoryExclusions: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    repairExtensions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    convertToCbz: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    emptyTrashAfterScan: boolean;
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    seriesCover: LibraryDtoSeriesCoverEnum;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    hashFiles: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    hashPages: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    analyzeDimensions: boolean;
    /**
     * 
     * @type {string}
     * @memberof LibraryDto
     */
    oneshotsDirectory?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryDto
     */
    unavailable: boolean;
}


/**
 * @export
 */
export const LibraryDtoScanIntervalEnum = {
    Disabled: 'DISABLED',
    Hourly: 'HOURLY',
    Every6H: 'EVERY_6H',
    Every12H: 'EVERY_12H',
    Daily: 'DAILY',
    Weekly: 'WEEKLY'
} as const;
export type LibraryDtoScanIntervalEnum = typeof LibraryDtoScanIntervalEnum[keyof typeof LibraryDtoScanIntervalEnum];

/**
 * @export
 */
export const LibraryDtoSeriesCoverEnum = {
    First: 'FIRST',
    FirstUnreadOrFirst: 'FIRST_UNREAD_OR_FIRST',
    FirstUnreadOrLast: 'FIRST_UNREAD_OR_LAST',
    Last: 'LAST'
} as const;
export type LibraryDtoSeriesCoverEnum = typeof LibraryDtoSeriesCoverEnum[keyof typeof LibraryDtoSeriesCoverEnum];


/**
 * Check if a given object implements the LibraryDto interface.
 */
export function instanceOfLibraryDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "root" in value;
    isInstance = isInstance && "importComicInfoBook" in value;
    isInstance = isInstance && "importComicInfoSeries" in value;
    isInstance = isInstance && "importComicInfoCollection" in value;
    isInstance = isInstance && "importComicInfoReadList" in value;
    isInstance = isInstance && "importComicInfoSeriesAppendVolume" in value;
    isInstance = isInstance && "importEpubBook" in value;
    isInstance = isInstance && "importEpubSeries" in value;
    isInstance = isInstance && "importMylarSeries" in value;
    isInstance = isInstance && "importLocalArtwork" in value;
    isInstance = isInstance && "importBarcodeIsbn" in value;
    isInstance = isInstance && "scanForceModifiedTime" in value;
    isInstance = isInstance && "scanInterval" in value;
    isInstance = isInstance && "scanOnStartup" in value;
    isInstance = isInstance && "scanCbx" in value;
    isInstance = isInstance && "scanPdf" in value;
    isInstance = isInstance && "scanEpub" in value;
    isInstance = isInstance && "scanDirectoryExclusions" in value;
    isInstance = isInstance && "repairExtensions" in value;
    isInstance = isInstance && "convertToCbz" in value;
    isInstance = isInstance && "emptyTrashAfterScan" in value;
    isInstance = isInstance && "seriesCover" in value;
    isInstance = isInstance && "hashFiles" in value;
    isInstance = isInstance && "hashPages" in value;
    isInstance = isInstance && "analyzeDimensions" in value;
    isInstance = isInstance && "unavailable" in value;

    return isInstance;
}

export function LibraryDtoFromJSON(json: any): LibraryDto {
    return LibraryDtoFromJSONTyped(json, false);
}

export function LibraryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'root': json['root'],
        'importComicInfoBook': json['importComicInfoBook'],
        'importComicInfoSeries': json['importComicInfoSeries'],
        'importComicInfoCollection': json['importComicInfoCollection'],
        'importComicInfoReadList': json['importComicInfoReadList'],
        'importComicInfoSeriesAppendVolume': json['importComicInfoSeriesAppendVolume'],
        'importEpubBook': json['importEpubBook'],
        'importEpubSeries': json['importEpubSeries'],
        'importMylarSeries': json['importMylarSeries'],
        'importLocalArtwork': json['importLocalArtwork'],
        'importBarcodeIsbn': json['importBarcodeIsbn'],
        'scanForceModifiedTime': json['scanForceModifiedTime'],
        'scanInterval': json['scanInterval'],
        'scanOnStartup': json['scanOnStartup'],
        'scanCbx': json['scanCbx'],
        'scanPdf': json['scanPdf'],
        'scanEpub': json['scanEpub'],
        'scanDirectoryExclusions': json['scanDirectoryExclusions'],
        'repairExtensions': json['repairExtensions'],
        'convertToCbz': json['convertToCbz'],
        'emptyTrashAfterScan': json['emptyTrashAfterScan'],
        'seriesCover': json['seriesCover'],
        'hashFiles': json['hashFiles'],
        'hashPages': json['hashPages'],
        'analyzeDimensions': json['analyzeDimensions'],
        'oneshotsDirectory': !exists(json, 'oneshotsDirectory') ? undefined : json['oneshotsDirectory'],
        'unavailable': json['unavailable'],
    };
}

export function LibraryDtoToJSON(value?: LibraryDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'root': value.root,
        'importComicInfoBook': value.importComicInfoBook,
        'importComicInfoSeries': value.importComicInfoSeries,
        'importComicInfoCollection': value.importComicInfoCollection,
        'importComicInfoReadList': value.importComicInfoReadList,
        'importComicInfoSeriesAppendVolume': value.importComicInfoSeriesAppendVolume,
        'importEpubBook': value.importEpubBook,
        'importEpubSeries': value.importEpubSeries,
        'importMylarSeries': value.importMylarSeries,
        'importLocalArtwork': value.importLocalArtwork,
        'importBarcodeIsbn': value.importBarcodeIsbn,
        'scanForceModifiedTime': value.scanForceModifiedTime,
        'scanInterval': value.scanInterval,
        'scanOnStartup': value.scanOnStartup,
        'scanCbx': value.scanCbx,
        'scanPdf': value.scanPdf,
        'scanEpub': value.scanEpub,
        'scanDirectoryExclusions': Array.from(value.scanDirectoryExclusions as Set<any>),
        'repairExtensions': value.repairExtensions,
        'convertToCbz': value.convertToCbz,
        'emptyTrashAfterScan': value.emptyTrashAfterScan,
        'seriesCover': value.seriesCover,
        'hashFiles': value.hashFiles,
        'hashPages': value.hashPages,
        'analyzeDimensions': value.analyzeDimensions,
        'oneshotsDirectory': value.oneshotsDirectory,
        'unavailable': value.unavailable,
    };
}

