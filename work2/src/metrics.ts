/*module.exports = {
    get: (callback) => {
      callback(null, [
        { timestamp: new Date('2013-11-04 14:00 UTC').getTime(), value:12}
      , { timestamp: new Date('2013-11-04 14:30 UTC').getTime(), value:15}
      ])
    }
}*/

export class Metric {
  public timestamp: string
  public value: number

  constructor(ts: string, v: number) {
    this.timestamp = ts
    this.value = v
  }
}

export class MetricsHandler {
  static get(callback: (error: Error | null, result?: Metric[]) => void) {
    const result = [
      new Metric('2013-11-04 14:00 UTC', 12),
      new Metric('2013-11-04 14:30 UTC', 15)
    ]
    callback(null, result)
  }
}