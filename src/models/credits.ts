export class Credits {
  value: number;

  constructor(credits: number) {
    this.value = credits;

    return this;
  }

  fund(creds: number): void {
    if(creds > 0) { 
      this.spend(Math.abs(creds));
      return; 
    }
    this.value += creds;
  }

  spend(creds:number): void {
    this.value -= creds;
  }
}