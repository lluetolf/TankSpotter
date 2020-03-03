export class SpotReport {
    id: number
    created: Date
    sensor: string
    sender: string
    status: string
    recipient: string
    observerLocation: Coordinates
    spotLocation: any
    spotTime: Date
    tankType: string
}
