export class SpotReport {
    id: number
    created: Date
    sensor: string
    sender: string
    status: string
    recipient: string
    observerLocation: Coordinates
    spotLocation: Coordinates
    spotTime: Date
    tankType: string
}
