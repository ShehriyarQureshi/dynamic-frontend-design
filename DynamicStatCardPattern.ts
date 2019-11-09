class DynamicStatCardPattern {

    public ourHeading1Data: Array<number> = [];
    public ourHeading1Labels: Array<string> = [];

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

        for (const iterator in sampleResponse) {
            for (const statObject in sampleResponse[iterator]) {
                this.ourHeading1Labels.push(statObject);
                this.ourHeading1Data.push(sampleResponse[iterator][statObject]);
            }
        }
        console.log('\nafter loop push -> DATA: ', this.ourHeading1Data);
        console.log('after loop push -> LABELS: ', this.ourHeading1Labels);
    }

}

new DynamicStatCardPattern();