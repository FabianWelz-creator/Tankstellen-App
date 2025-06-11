import type { Station } from '../types/Station'

// Holt die Tankstellen-Daten von der öffentlichen API
export async function fetchStations(): Promise<Station[]> {
    const res = await fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson")
    const data = await res.json()
    // Wandelt das rohe API-Format in das Station-Format um
    return data.features.map((item: any) => ({
        id: item.attributes.objectid,
        adresse: item.attributes.adresse,
        x: item.geometry.x,
        y: item.geometry.y
    }))
}