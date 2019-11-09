class NonDynamicStatCardPattern {

    public ourHeading1Data: Array<number> = [];
    public ourHeading1Labels: Array<string> = ['StatCardHeading1', 'statCardHeading2', 'statCardHeading3'];

    constructor() {
        this.getStats();
    }

    private getStats(): void {

        const sampleResponse: any = {
            "statCardHeading1": {
                "stat1": 100,
                "stat2": 200,
                "stat3": 300
            }
        }

        this.ourHeading1Data.push(sampleResponse.statCardHeading1.stat1);
        this.ourHeading1Data.push(sampleResponse.statCardHeading1.stat2);
        this.ourHeading1Data.push(sampleResponse.statCardHeading1.stat3);
        console.log('after manual push -> DATA: ', this.ourHeading1Data);
        console.log('after manual push -> LABELS: ', this.ourHeading1Labels);
    }

}

new NonDynamicStatCardPattern();