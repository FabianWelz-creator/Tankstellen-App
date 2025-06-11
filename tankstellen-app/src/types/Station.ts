// Definiert den Typ einer Tankstelle, wie er im Frontend verwendet wird.
export interface Station {
    id: number // Eindeutige ID der Tankstelle
    adresse: string // Adresse der Tankstelle
    x: number // Längengrad (Koordinaten)
    y: number // Breitengrad (Koordinaten)
}