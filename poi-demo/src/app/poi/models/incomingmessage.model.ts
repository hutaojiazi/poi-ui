export class IncomingMessage {
    from: string;
    text: string;
    time: string;

    constructor(from: string, text: string, time: string) {
        this.from = from;
        this.text = text;
        this.time = time;
    }
}